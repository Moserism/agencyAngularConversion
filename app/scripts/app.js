'use strict';

/**
 * @ngdoc overview
 * @name agencyAngularConversionApp
 * @description
 * # agencyAngularConversionApp
 *
 * Main module of the application.
 */

var app = angular.module('agencyAngularConversionApp', [ ]);

var serviceList = [{
	name: 'E-Commerce',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
	icon: 'fa-shopping-cart'
	},
{
	name: 'Responsive Design',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
	icon: 'fa-laptop'
	},
{
	name: 'Web Security',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
	icon: 'fa-lock'
	}
];

var productImageDirectory = '../images/portfolio/';

var portfolioList = [
	{
		url: 		'../views/modals/modal_1.html',
		name: 		'Round Icons',
		category: 	'Graphic Design',
		image:		productImageDirectory + 'roundicons.png'
	},
	
	{
		url: 		'../views/modals/modal_2.html',
		name: 		'',
		category: 	'',
		image:		''
	},
	
	{
		url: 		'../views/modals/modal_3.html',
		name: 		'',
		category: 	'',
		image:		''
	},
	
	{
		url: 		'../views/modals/modal_4.html',
		name: 		'',
		category: 	'',
		image:		''
	},
	
	{
		url: 		'../views/modals/modal_5.html',
		name: 		'',
		category: 	'',
		image:		''
	},
	
	{
		url: 		'../views/modals/modal_6.html',
		name: 		'',
		category: 	'',
		image:		''
	}
];

app.controller('ServicesController', function () {
	this.services = serviceList;
});

app.controller('PortfolioController', function(){
	this.portfolio = portfolioList;
});