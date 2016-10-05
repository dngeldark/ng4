(function (){
'use strict';

angular.module('MenuApp')
.component('categories',{
	templateUrl: 'js/views/categories.component.html',
	bindings: {
		categories: '<'
	}
});

})();