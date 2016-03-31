'use strict';

var app = angular.module('AIApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var home  = { name: 'home',  url: '/',       templateUrl: 'home.html'  };
  var istoric = {name: 'istoric', url: '/istoric', templateUrl: 'istoric.html'};
  var knowmore = {name: 'knowmore', url: '/knowmore', templateUrl: 'knowmore.html'};
  $stateProvider.state(home);
  $stateProvider.state(istoric);
  $stateProvider.state(knowmore);
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


  function goToKnowmorePage(){
    $state.go('knowmore');   
  }

  $scope.goToKnowmorePage = goToKnowmorePage;
  // end

  window.sc = $scope;

}]);

