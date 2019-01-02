/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('aboutCtrl', function($scope, $location, $http){	
	$scope.callCarouselSobre = function(){
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

	$scope.callCarouselSobre();  
});