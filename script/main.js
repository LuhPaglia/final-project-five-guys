const mainApp = angular.module('mainApp',['ngRoute']);
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

mainApp.controller('homeControl', function($scope){

});
mainApp.controller('bookControl', function($scope){

});
mainApp.controller('gameControl', function($scope){

});
mainApp.controller('movieControl', function($scope){

});