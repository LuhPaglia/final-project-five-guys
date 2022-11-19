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
mainApp.run(function($rootScope,$location, $http    ){
    $rootScope.userMap = new Map();
    $rootScope.productMap = new Map();

    try{
        $http.get('../data/products.json').then(
            (response)=>{
                if(response.status==200){
                    response.data.forEach((value)=>{
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
mainApp.controller('bookControl', function($scope){

});
mainApp.controller('gameControl', function($scope){

});
mainApp.controller('movieControl', function($scope){

});