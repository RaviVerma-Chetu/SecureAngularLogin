(function(){
'use strict';
	angular
		.module('app')
		.factory('holdDataFactory',holdDataFactory);
		//holdData.$inject=[$scope];
		function holdDataFactory(){
			 var datafactory = {};
			 datafactory.getData=getData;
			 datafactory.setData=setData;
			 return datafactory;
			 
			 function getData(){
				return datafactory;
			 }
			 
			 function setData(data){
				datafactory=data;
			 }
		}
})();