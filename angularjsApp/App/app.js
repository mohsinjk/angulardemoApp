var demoApp = angular.module('demoApp', ['ngRoute']);


demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
            {
                controller: 'customerController',
                templateUrl: 'Partials/View1.html'
            })
        .when('/view2',
            {
                controller: 'customerController',
                templateUrl: 'Partials/View2.html'
            })
        .otherwise(
            {
                redirectTo: '/view1'
            });
});