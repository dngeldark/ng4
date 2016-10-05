'use strict';

angular.module('data')
	.service('MenuDataService',['$http',function($http){

		var service = this;
		service.getAllCategories = function(){
			return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
				.then(function(response){
					return response.data;
				}, function(response){
					return response.status;
				});
		};

		service.getItemsForCategory = function(categoryShortName){
			return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
				.then(function(response){
					return response.data
				}, function(response){
					return response.status
				});
		};

	}]);