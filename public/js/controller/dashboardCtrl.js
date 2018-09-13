/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('dashboardCtrl', function($scope, $location, $http, $state, $stateParams, $firebaseObject){	
	checkPath();

	function checkPath(){
		if($stateParams.obj != null){}			
		else $state.go('admin');	
	}	
});