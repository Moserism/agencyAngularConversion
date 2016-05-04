'use strict';

/**
 * @ngdoc overview
 * @name agencyAngularConversionApp
 * @description
 * # agencyAngularConversionApp
 *
 * Main module of the application.
 */

var app = angular.module('agencyAngularConversionApp', ['index-pages']);

app.directive('contactForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/contact.html'
	};
});

app.directive('footerAlt', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/footer.html'
	};
});
