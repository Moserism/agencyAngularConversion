/**
 * @ngdoc overview
 * @name agencyAngularConversionApp
 * @description
 * # agencyAngularConversionApp
 *
 * Module for the index page of the application.
 */
 
(function(){
	
	'use strict';
	
	var app = angular.module('index-pages', []);
	
	
	app.directive('servicesIndex', [ '$http', function($http){
		return {
			restrict: 'E',
			templateUrl: 'views/index/services-index.html',
			controller: function (){
				var item = this;
				item.services = [];
				$http.get('scripts/JSON/services.json')
					.success(function(data){
						item.services = data;
					})
					.error(function(){
						item.services = [{name: 'error'}];
					});
				},
			controllerAs: 'serviceCrtl'
		};
	}]);
	
	
	app.directive('portfolioIndex', [ '$http', function($http){
		return {
			restrict: 'E',
			templateUrl: 'views/index/portfolio-index.html',
			controller: function(){
				var content = this;
		
				content.items = [];
		
				$http.get('/scripts/JSON/portfolio.json')
					.success(function(data){
						content.items = data;
					});
			},
			controllerAs: 'portfolioCtrl'	
		};
	}]);
	
	app.directive('teamIndex', [ '$http', function($http){
		return {
			restrict: 'E',
			templateUrl: 'views/index/team-index.html',
			controller: function(){
				var team = this;
				team.persons = [];
				$http.get('/scripts/JSON/team.json').success(function(data){
					team.persons=data;
				})
				.error(function(){
					team.persons=[{name: 'error'}];
				});
			},
			controllerAs: 'teamCtrl'
		};
	}]);
	
	app.directive('clientIndex', [ '$http', function($http){
		return{
			restrict: 'E',
			templateUrl: 'views/index/clients-index.html',
			controller: function(){
				var logos = this;
				logos.clients = [];
				$http.get('scripts/JSON/clients.json').success(function(data){
					logos.clients = data;
				});
			},
			controllerAs: 'clientCtrl'
		};
	}]);
	
	app.directive('aboutIndex', [ '$http', function($http){
		return{
			restrict: 'E',
			templateUrl: 'views/index/about-index.html',
			controller: function(){
				var page = this;
				page.time = [];
				$http.get('/scripts/JSON/timeline.json').success(function(data){
					page.time=data;
				})
				.error(function(){
					page.time=[{heading: 'error'}];
				});	
			},
			controllerAs: 'timelineCtrl'
		};
	}]);
	
	app.directive('portfolioModals', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/index/portfolio-modals.html'
		};
	});
	
})();