/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){

  // var config = {
  //   apiKey: "AIzaSyA_Pi0skdiVRJb3pDGqC-ADC7SPCuWtWv0",
  //   authDomain: "edutatto-1530661509405.firebaseapp.com",
  //   databaseURL: "https://edutatto-1530661509405.firebaseio.com",
  //   projectId: "edutatto-1530661509405",
  //   storageBucket: "edutatto-1530661509405.appspot.com",
  //   messagingSenderId: "648067521116"
  // };

  // firebase.initializeApp(config);	

	var newValue;
	$scope.statusmenu = 'home';	

	$scope.changeStatus = function(newValue){
		$scope.statusmenu =  newValue;
	};

  $scope.callCarouselHome = function(){
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          autoplay:true,
          autoplayTimeout:2500,
          responsive:{
            1200:{
              items:1
            },
            1024:{
              items:1
            },
            768:{
              items:1
            },
            425:{
              items:1
            },
            375:{
              items:1
            },
            320:{
              items:1
            }
          }
      })
    });
  };

  $scope.callCarouselHome();
});  
