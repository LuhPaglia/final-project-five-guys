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

    $http.get('../data/products.json').then(
        (response)=>{
            if(response.status==200){
                console.log(response.data);
                $rootScope.productsData = response.data;
                response.data.map((value)=>{
                    let newProduct = new ProductClass(value.id, value.item_name, value.price, value.amount, value.category, value.img_prod, value.physical, value.digital);
                    $rootScope.productMap.set(value.id,newProduct);
                })
            }
        },
        (reject)=>{console.log(reject)}
    );
    
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

})
mainApp.controller('homeControl', function($scope){

});
mainApp.controller('bookControl', function($scope,$rootScope,$http){
    
});

mainApp.controller('gameControl',function($scope){
    $scope.keyName = 'item_name';
    let button = document.getElementsByClassName("sortButton");
    $scope.chg = function(nam,price,date,col1,col2,col3,fil){
        $scope.sortName = nam;
        $scope.sortPrice = price;
        $scope.sortDate = date;
        button[0].style.backgroundColor = col1;
        button[1].style.backgroundColor = col2;
        button[2].style.backgroundColor = col3;
        $scope.filterInput = fil;
    }

    if($scope.keyName == 'item_name'){
        $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
    $scope.reverse = false;
    $scope.sort = function(key){
        $scope.keyName = key;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "row", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "oldest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('z - a', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "high", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "latest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }   
        } 
    };

    $scope.resset = function(item_name){
        $scope.keyName = item_name;
        $scope.reverse = false;
        $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    }
});

mainApp.controller('movieControl', function($scope){
    $scope.keyName = 'item_name';
    let button = document.getElementsByClassName("sortButton");
    $scope.chg = function(nam,price,date,col1,col2,col3,fil){
        $scope.sortName = nam;
        $scope.sortPrice = price;
        $scope.sortDate = date;
        button[0].style.backgroundColor = col1;
        button[1].style.backgroundColor = col2;
        button[2].style.backgroundColor = col3;
        $scope.filterInput = fil;
    }

if($scope.keyName == 'item_name'){
    $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
    $scope.reverse = false;
    $scope.sort = function(key){
        $scope.keyName = key;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "row", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "oldest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('z - a', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "high", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "latest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }   
        } 
    };

    $scope.resset = function(item_name){
        $scope.keyName = item_name;
        $scope.reverse = false;
        $scope.chg('a - z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
});

 

