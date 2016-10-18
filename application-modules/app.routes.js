'use strict';
var app = angular.module('DryveApp', []);
app.run(['$rootScope', function($rootScope) {

}]);

app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$stateProvider', '$locationProvider', function($controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $locationProvider) {
    app.controller = $controllerProvider.register;
    app.directive  = $compileProvider.directive;
    app.filter     = $filterProvider.register;
    app.factory    = $provide.factory;
    app.service    = $provide.service;
    app.constant   = $provide.constant;
    app.value      = $provide.value;
}]);
