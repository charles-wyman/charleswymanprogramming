'use strict';

angular.module('myApp.art', ['ngRoute', 'ngAnimate', 'ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/code', {
    templateUrl: 'code/code.html',
    controller: 'codeCtrl'
  });
}])

.controller('codeCtrl', function($scope) {
    
    
});
