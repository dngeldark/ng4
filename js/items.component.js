(function (){
'use strict';

angular.module('MenuApp')
.component('items',{
	templateUrl: '../views/items.component.html',
	bindings: {
		items: '<'
	}
});

})();