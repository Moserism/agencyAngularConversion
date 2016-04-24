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
		modal: 'portfolioModal1',
		url: '../views/modals/modal_1.html',
		name: 'Round Icons',
		category: 'Graphic Design',
		image: productImageDirectory + 'roundicons.png'
	},
	
	{
		modal: 		'portfolioModal2',
		name: 		'Startup Framework',
		category: 	'Website Design',
		image:		productImageDirectory + 'startup-framework.png'
	},
	
	{
		modal: 		'portfolioModal3',
		name: 		'Treehouse',
		category: 	'Website Design',
		image:		productImageDirectory + 'treehouse.png'
	},
	
	{
		modal: 		'portfolioModal4',
		name: 		'Golden',
		category: 	'Website Design',
		image:		productImageDirectory + 'golden.png'
	},
	
	{
		modal: 		'portfolioModal5',
		name: 		'Escape',
		category: 	'Website Design',
		image:		productImageDirectory + 'escape.png'
	},
	
	{
		modal: 		'portfolioModal6',
		name: 		'Dreams',
		category: 	'Website Design',
		image:		productImageDirectory + 'dreams.png'
	}
];

app.controller('ServicesController', function () {
	this.services = serviceList;
});

app.controller('PortfolioController', function(){
	this.items = portfolioList;
});