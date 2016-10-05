'use strict';

angular.module('MenuApp',['data','ui.router'])
	.controller('MainController',['MenuDataService',function(MenuDataService){
		var ctrl = this;
		MenuDataService.getItemsForCategory("V")
			.then(function(data){
				ctrl.items = data.menu_items;
			},function(data){

			});
	}])



;