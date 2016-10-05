(function (){
'use strict';

angular.module('MenuApp')
.component('items',{
	templateUrl: 'js/views/items.component.html',
	bindings: {
		items: '<'
	}
});

})();