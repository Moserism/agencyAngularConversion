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
var teamImageDirectory = '../images/team/';
var clientImageDirectory = '../images/logos/';

var portfolioList = [
	{
		modal: 		'portfolioModal1',
		url: 		'../views/modals/modal_1.html',
		name: 		'Round Icons',
		category: 	'Graphic Design',
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

var teamList = [
	{
		name:	'Kay Garland',
		job:	'Lead Designer',
		image:	teamImageDirectory + '1.jpg',
		sites: [
			{
				url:  'http://twitter.com/',
				icon: 'fa-twitter'
			},
			{
				url:  'http://www.facebook.com/',
				icon: 'fa-facebook'
			},
			{
				url:  'http://www.linkedin.com/',
				icon: 'fa-linkedin'
			}
		]
	},
	{
		name:	'Larry Parker',
		job:	'Lead Marketer',
		image:	teamImageDirectory + '2.jpg',
		sites: [
			{
				url:  'http://twitter.com/',
				icon: 'fa-twitter'
			},
			{
				url:  'http://www.facebook.com/',
				icon: 'fa-facebook'
			},
			{
				url:  'http://www.linkedin.com/',
				icon: 'fa-linkedin'
			}
		]
	},
	{
		name:	'Diana Pertersen',
		job:	'Lead Developer',
		image:	teamImageDirectory + '3.jpg',
		sites: [
			{
				url:  'http://angularjs.org',
				icon: 'fa-twitter'
			},
			{
				url:  'http://github.com/',
				icon: 'fa-github'
			},
			{
				url:  'http://www.linkedin.com/',
				icon: 'fa-linkedin'
			}
		]
	}
];

var clientList = [
	{
		name:	'Envato - Top digital assets and services',
		url:	'http://envato.com/index.html',
		image:	clientImageDirectory + 'envato.jpg',
	},
	{
		name:	'Designmodo: Web Design Blog and Shop',
		url:	'http://designmodo.com/',
		image:	clientImageDirectory + 'designmodo.jpg',
	},
	{
		name:	'Website Templates & WordPress Themes from ThemeForest',
		url:	'http://themeforest.net/',
		image:	clientImageDirectory + 'themeforest.jpg',
	},
	{
		name:	'Fonts, Graphics, Themes and More ~ Creative Market',
		url:	'http://creativemarket.com/',
		image:	clientImageDirectory + 'creative-market.jpg',
	}
];

app.controller('ServicesController', function () {
	this.services = serviceList;
});

app.controller('PortfolioController', function(){
	this.items = portfolioList;
});

app.controller('TeamController', function (){
	this.persons = teamList;
});

app.controller('ClientController', function(){
	this.clients = clientList;
});