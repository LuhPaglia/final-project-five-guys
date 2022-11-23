const mainApp = angular.module('mainApp',['ngRoute']);
import ProductClass from './classes/ProductClass.js';
import UserClass from './classes/UserClass.js';

mainApp.config(($routeProvider)=>{
    $routeProvider
    .when('/',{
        templateUrl:'./template/home.html',
        controller: 'homeControl'
    })
    .when('/book',{
        templateUrl:'./template/book.html',
        controller:'bookControl'
    })
    .when('/game',{
        templateUrl:'./template/game.html',
        controller:'gameControl'
    })
    .when('/movie',{
        templateUrl:'./template/movie.html',
        controller:'movieControl'
    })
    .when('/shop-card',{
        templateUrl:'./template/shopcart.html',
        controller:'movieControl'
    })
    .when('/digital-wallet',{
        templateUrl:'./template/digitalwallet.html',
        controller:'movieControl'
    })
    .when('/login',{
        templateUrl:'./template/login.html',
        controller:'movieControl'
    })
    .otherwise({
        templateUrl:'./template/notfound.html'
    })
});
//runは一番最初に読み込まれる
mainApp.run(function($rootScope,$location,$http){
    $rootScope.userMap = new Map();
    $rootScope.productMap = new Map();
    

   
    try{
        $http.get('../data/users.json').then(
            (response)=>{
                if(response.status==200){
                    response.data.forEach((value)=>{
                        let newUser = new UserClass(value.customerId, value.userName, value.first_name, value.last_name, value.password, value.email);
                        $rootScope.userMap.set(value.customerId,newUser);
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };
})
mainApp.controller('homeControl', function($scope){

});
mainApp.controller('bookControl', function($scope,$rootScope,$http){
// try{
        $http.get('../data/products.json').then(
            (response)=>{
                // falseの場合は404
                // trueは200
                if(response.status==200){
                    console.log(response.data); 
                    $scope.productsData = response.data;
                    response.data.map((value)=>{
                        console.log(value);
                        // クラスを使ってinstanceを作る際は絶対にNewをつける
                        let newProduct = new ProductClass(value.id, value.item_name, value.price, value.amount, value.category, value.img_prod, value.physical, value.digital);
                        $rootScope.productMap.set(value.id,newProduct);
                        // key（ $rootScope.productMap）を使ってvalueをセットする
                        // setはmapでしか使えない

                        // mpaはget,set,delete,hasも4つがある
                        // deleteはkeyを使ってvalueを削除する
                        // getはkeyを使ってvalueを取得する
                        // hasはkeyを使ってvalueをあるかどうか確認する

                        // Arrayはindex順番でvalueを得る。
                        // mapはkeyを使ってvalue得る

                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    // }catch(e){
    //     console.log(e);
    // };
    $scope.show = function(){
        console.log($scope.input)
    }
});

mainApp.controller('gameControl',function($scope,$rootScope,$http){
    try{
        $http.get('../data/products.json').then(
            (response)=>{
                if(response.status==200){
                    console.log(response.data);
                    $scope.productsData = response.data;
                    response.data.map((value)=>{
                        let newProduct = new ProductClass(value.id, value.item_name, value.price, value.amount, value.category, value.img_prod, value.physical, value.digital);
                        $rootScope.productMap.set(value.id,newProduct);
                        // console.log(value.category);
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };

    // $scope.column = 'item_name';
    $scope.reverse = true;
    $scope.sort = function(col){
        $scope.column = col;
        switch($scope.reverse){
            case false:
                $scope.reverse = true;
                $scope.reverseclass = 'arrow-down';
                break;
                case true:
                    $scope.reverse = false;
                    $scope.reverseclass = 'arrow-up';
            break;
        }
        // if($scope.reverse == true){
        // $scope.reverse = false;
        // $scope.reverseclass = 'arrow-up';
        // }else{
        //     $scope.reverse = true;
        //     $scope.reverseclass = 'arrow-down';
        // }
    };

    $scope.sortClass = function(col){
        if($scope.column == col ){
         if($scope.reverse){
             return 'arrow-down';
        }else{
            return 'arrow-up'; 
         }
        }else{
         return '';
        }
    };

    $scope.resset = function(col){
        $scope.column = "id";
        $scope.reverse = true;
    }

});
mainApp.controller('movieControl', function($scope,$rootScope,$http){
    try{
        $http.get('../data/products.json').then(
            (response)=>{
                if(response.status==200){
                    console.log(response.data);
                    $scope.productsData = response.data;
                    response.data.map((value)=>{
                        let newProduct = new ProductClass(value.id, value.item_name, value.price, value.amount, value.category, value.img_prod, value.physical, value.digital);
                        $rootScope.productMap.set(value.id,newProduct);
                        // console.log(value.category);
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };

    // $scope.column = 'item_name';
    $scope.reverse = true;
    $scope.sort = function(col){
        $scope.column = col;
        switch($scope.reverse){
            case false:
                $scope.reverse = true;
                $scope.reverseclass = 'arrow-down';
            break;
            case true:
                $scope.reverse = false;
                $scope.reverseclass = 'arrow-up';
            break;
        }
    };

    $scope.sortClass = function(col){
        if($scope.column == col ){
         if($scope.reverse){
             return 'arrow-up';
        }else{
            return 'arrow-down'; 
         }
        }else{
         return '';
        }
    };

    $scope.resset = function(col){
        $scope.column = "id";
        $scope.reverse = true;
    }

});