'use strict';

angular.module('pApp')
.controller('MainCtrl', function ($scope) {
	})

  .controller('ProjectCtrl', function ($scope) {

  	$scope.activeValue;
	$scope.clickedPage = function(value){
	    $scope.activeValue = value;
	};

  	$scope.showStory = function(){
  		console.log('Show Story');
  	};

  	$scope.clickedPage('story');

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
