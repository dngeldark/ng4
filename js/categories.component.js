(function (){
'use strict';

angular.module('MenuApp')
.component('categories',{
	templateUrl: '../views/categories.component.html',
	bindings: {
		categories: '<'
	}
});

})();