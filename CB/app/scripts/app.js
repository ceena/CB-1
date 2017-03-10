'use strict';

angular.module('pApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/story', {
        templateUrl: 'views/metro_story2.html',
        controller: 'MainCtrl'
      })
      .when('/features', {
        templateUrl: 'views/features.html',
        controller: 'MainCtrl'
      })
       .when('/usecase', {
        templateUrl: 'views/usecase.html',
        controller: 'MainCtrl'
      })
       .when('/requirements', {
        templateUrl: 'views/modularize.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/story'
      });
  });
