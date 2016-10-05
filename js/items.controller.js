'use strict';
angular.module('MenuApp')
.controller('ItemsController',['items',function(items){
	this.items = items.menu_items;
}]);