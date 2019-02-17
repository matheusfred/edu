/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('dashboardCtrl', function($scope, $location, $http, $state, $stateParams){	
	checkPath();
	const firestore = firebase.firestore();
	const settings = {timestampsInSnapshots: true};
	firestore.settings(settings);

	function checkPath(){
		if($stateParams.obj != null){}			
		else $state.go('admin');	
	};	    

	$scope.loadScraps = function(){
		firestore.collection('scraptmsg').get({
		});	
	};	

});
