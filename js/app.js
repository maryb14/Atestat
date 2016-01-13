'use strict';

var app = angular.module('AIApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var home  = { name: 'home',  url: '/',       templateUrl: 'home.html'  };
  var istoric = {name: 'istoric', url: '/istoric', templateUrl: 'istoric.html'};
  $stateProvider.state(home);
  $stateProvider.state(istoric);
  $urlRouterProvider.otherwise('/');
}]);


app.controller('AIAppController', ['$scope', '$state', function($scope, $state) {
  // begin

  function goToIstoricPage() {
    $state.go('istoric');
  }
  $scope.goToIstoricPage = goToIstoricPage;

  function goToHomePage() {
    $state.go('home');
  }
  $scope.goToHomePage = goToHomePage;

  // end

  window.sc = $scope;

}]);

