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
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };

    $scope.key = 'item_name';
    let button = document.getElementsByClassName("sortButton");
    if($scope.key == 'item_name'){
        $scope.sortName = "a";
        button[0].style.backgroundColor = "	#99CCFF";
        $scope.sortPrice = "Price";
        $scope.sortDate = "Date";
    };
    $scope.reverse = false;
    $scope.sort = function(col){
        $scope.key = col;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.key){
                case 'item_name':
                    $scope.sortName = "a";
                    $scope.sortPrice = "Price";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#99CCFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "#FFFFFF";
                break;
                case 'price':
                    $scope.sortPrice = "row";
                    $scope.sortName = "Name";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#99CCFF";
                    button[2].style.backgroundColor = "	#FFFFFF";
                break;
                case 'release':
                    $scope.sortDate = "earliest";
                    $scope.sortName = "Name";
                    $scope.sortPrice = "Price";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "	#99CCFF";
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.key){
                case 'item_name':
                    $scope.sortName = "z";
                    $scope.sortPrice = "Price";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#99CCFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "#FFFFFF";
                break;
                case 'price':
                    $scope.sortPrice = "high";
                    $scope.sortName = "Name";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#99CCFF";
                    button[2].style.backgroundColor = "	#FFFFFF";
                break;
                case 'release':
                    $scope.sortDate = "latest";
                    $scope.sortName = "Name";
                    $scope.sortPrice = "Price";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "	#99CCFF";
                break;
            }
        } 
    };

    $scope.resset = function(item_name){
        $scope.key = item_name;
        $scope.reverse = false;
        if($scope.key == 'item_name'){
            $scope.sortName = "a";
            $scope.sortPrice = "Price";
            $scope.sortDate = "Date";
            button[0].style.backgroundColor = "#99CCFF";
            button[1].style.backgroundColor = "#FFFFFF";
            button[2].style.backgroundColor = "#FFFFFF";
        };
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
                    })
                }
            },
            (reject)=>{console.log(reject)}
        )
    }catch(e){
        console.log(e);
    };

    $scope.key = 'item_name';
    let button = document.getElementsByClassName("sortButton");
    if($scope.key == 'item_name'){
        $scope.sortName = "a";
        button[0].style.backgroundColor = "	#99CCFF";
        $scope.sortPrice = "Price";
        $scope.sortDate = "Date";
    };
    $scope.reverse = false;
    $scope.sort = function(col){
        $scope.key = col;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.key){
                case 'item_name':
                    $scope.sortName = "a";
                    $scope.sortPrice = "Price";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#99CCFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "#FFFFFF";
                break;
                case 'price':
                    $scope.sortPrice = "row";
                    $scope.sortName = "Name";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#99CCFF";
                    button[2].style.backgroundColor = "	#FFFFFF";
                break;
                case 'release':
                    $scope.sortDate = "earliest";
                    $scope.sortName = "Name";
                    $scope.sortPrice = "Price";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "	#99CCFF";
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.key){
                case 'item_name':
                    $scope.sortName = "z";
                    $scope.sortPrice = "Price";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#99CCFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "#FFFFFF";
                break;
                case 'price':
                    $scope.sortPrice = "high";
                    $scope.sortName = "Name";
                    $scope.sortDate = "Date";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#99CCFF";
                    button[2].style.backgroundColor = "	#FFFFFF";
                break;
                case 'release':
                    $scope.sortDate = "latest";
                    $scope.sortName = "Name";
                    $scope.sortPrice = "Price";
                    button[0].style.backgroundColor = "#FFFFFF";
                    button[1].style.backgroundColor = "#FFFFFF";
                    button[2].style.backgroundColor = "	#99CCFF";
                break;
            }
        } 
    };

    $scope.resset = function(item_name){
        $scope.key = item_name;
        $scope.reverse = false;
        if($scope.key == 'item_name'){
            $scope.sortName = "a";
            $scope.sortPrice = "Price";
            $scope.sortDate = "Date";
            button[0].style.backgroundColor = "#99CCFF";
            button[1].style.backgroundColor = "#FFFFFF";
            button[2].style.backgroundColor = "#FFFFFF";
        };
    }

});

