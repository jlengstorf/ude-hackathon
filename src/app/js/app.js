'use strict';
(function(){

    var app = angular.module('udeHackathon', ['ngRoute']);
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'ProductCtrl'
            })
            .when('/product/:product_id', {
                templateUrl: '/views/product.html',
                controller: 'ProductCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    app.factory('Page', function(){
        var title = 'Select a Product';
        return {
            title: function() { return title; },
            setTitle: function(newTitle) { title = newTitle; }
        };
    });

}.call(this));
