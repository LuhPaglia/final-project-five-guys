const mainApp = angular.module('mainApp',['ngRoute']);
import ProductClass from './classes/ProductClass.js';
import UserClass from './classes/UserClass.js';
import shopCart from './classes/shopCart.js'

mainApp.config(($routeProvider)=>{
    $routeProvider
    .when('/',{
        templateUrl:'./template/home.html',
        controller: 'shopControl'
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
        controller:'shopControl'
    })
    .when('/digital-wallet',{
        templateUrl:'./template/digitalwallet.html',
        controller:'walletControl'
    })
    .when('/login',{
        templateUrl:'./template/login.html',
        controller:'loginControl'
    })
    .otherwise({
        templateUrl:'./template/notfound.html'
    })
});
mainApp.run(function($rootScope,$location, $http ){
    $rootScope.userMap = new Map();
    $rootScope.productMap = new Map();
    $rootScope.logged = false;
    $rootScope.userLogged = null;
    $rootScope.logoutUser = function(){
        $rootScope.logged = false;
        $rootScope.userLogged = null;
        $location.path('/');
    }
    $rootScope.cartArray = [];
    $rootScope.cartMap = new shopCart(99);


    try{
        $http.get('../data/products.json').then(
            (response)=>{
                if(response.status==200){
                    $rootScope.productsData = response.data;
                    response.data.forEach((value)=>{
                        let newProduct = new ProductClass(value.id, value.item_name, value.price, value.amount, value.category, value.img_prod, value.physical, value.digital);
                        $rootScope.productMap.set(value.id,newProduct);
                    })
                    $rootScope.popBestProducts()
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
    $rootScope.popBestProducts = function(){
        $rootScope.bestBooks = new Array()
        $rootScope.bestMovies = new Array()
        $rootScope.bestGames = new Array()

        $rootScope.productMap.forEach((item, idx)=>{
            let productItem = item.toObj()
            if(productItem.category=='book' && $rootScope.bestBooks.length < 4){
                $rootScope.bestBooks.push(productItem)
            }else if (productItem.category=='game' && $rootScope.bestGames.length < 4){
                $rootScope.bestGames.push(productItem)
            }else if (productItem.category=='movie' && $rootScope.bestMovies.length < 4){
                $rootScope.bestMovies.push(productItem)
            }
        })
    }

})
mainApp.controller('homeControl', function($scope){

});
mainApp.controller('bookControl', function($scope){
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
        $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
    $scope.reverse = false;
    $scope.sort = function(key){
        $scope.keyName = key;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "Low", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Oldest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('Z - A', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "High", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Latest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }   
        } 
    };

    $scope.reset = function(item_name){
        $scope.keyName = item_name;
        $scope.reverse = false;
        $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
});
mainApp.controller('gameControl', function($scope){
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
        $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
    $scope.reverse = false;
    $scope.sort = function(key){
        $scope.keyName = key;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "Low", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Oldest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('Z - A', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "High", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Latest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }   
        } 
    };

    $scope.reset = function(item_name){
        $scope.keyName = item_name;
        $scope.reverse = false;
        $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
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
    $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
    $scope.reverse = false;
    $scope.sort = function(key){
        $scope.keyName = key;
        if($scope.reverse == true){
            $scope.reverse = false;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "Low", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Oldest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }
        }else{
            $scope.reverse = true;
            switch($scope.keyName){
                case 'item_name':
                    $scope.chg('Z - A', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
                break;
                case 'price':
                    $scope.chg('Name', "High", "Date","#FFFFFF","#99CCFF","#FFFFFF");
                break;
                case 'release':
                    $scope.chg('Name', "Price", "Latest","#FFFFFF","#FFFFFF","#99CCFF");
                break;
            }   
        } 
    };

    $scope.reset = function(item_name){
        $scope.keyName = item_name;
        $scope.reverse = false;
        $scope.chg('A - Z', "Price", "Date","#99CCFF","#FFFFFF","#FFFFFF");
    };
});
mainApp.controller('loginControl', function($scope, $rootScope, $location){
    $scope.email = '';
    $scope.password = '';
    $scope.getLogin = function(){
        console.log($scope.email)
        console.log($scope.password)
        $rootScope.userMap.forEach(function (value){
            if(value.toObj().email == $scope.email && value.toObj().password == $scope.password){
                $rootScope.logged = true;
                $rootScope.userLogged = value;
                let temp = $rootScope.cartMap
                $rootScope.cartMap = new shopCart(value.toObj().customerId);  
                for(const item of temp.getAllValues()){
                    $rootScope.cartMap.addItem(item);
                }
                $location.path('/');
            }
        });

    }
});
mainApp.controller('walletControl', function($scope){

});
mainApp.controller('shopControl', function($rootScope, $scope){
    $rootScope.buyItem = function(itemId){
        
        let selItem = $rootScope.productMap.get(itemId);
        selItem = selItem.toObj()
        selItem.amount = 1;

        if($rootScope.cartMap.hasItem(itemId)){
            selItem = $rootScope.cartMap.getItem(itemId)
            selItem.amount = selItem.amount + 1
        }
        $rootScope.cartMap.addItem(selItem)

        $rootScope.cartArray = [];
        for(let product of $rootScope.cartMap.getAllValues()){
            $rootScope.cartArray.push(product)
        }
        $rootScope.calTotal();
    };
    $rootScope.delItem = function(itemId){
        $rootScope.cartMap.delProduct(itemId)

        $rootScope.cartArray = [];
        for(const item of $rootScope.cartMap.getAllValues()){
            $rootScope.cartArray.push(item);
        }
        $rootScope.calTotal();
    };

    $rootScope.calTotal = function(){
        return $rootScope.cartMap.calTotalMap()
    }
});