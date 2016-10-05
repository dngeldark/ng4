'use strict';

angular.module('MenuApp')
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

	// Redirect to homoe page if no other URL matches
	$urlRouterProvider.otherwise('/');

	//set up UI states
	$stateProvider

	// Home page
	.state('home', {
		url: '/',
		templateUrl: 'js/views/home.html'
	})

	.state('categories',{
		url: '/categories',
		templateUrl: 'js/views/categories.html',
		controller: 'CategoriesController as categories',
		resolve: {
			categories: ['MenuDataService',function(MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})

	.state('items', {
		url: '/categories/:category',
		templateUrl: 'js/views/items.html',
		controller: 'ItemsController as items',
		resolve: {
			items: ['$stateParams','MenuDataService', function($stateParams,MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.category);
			}]
		}
	});


})