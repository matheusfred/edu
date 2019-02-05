/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('galleryCtrl', function($scope, $location, $http){
	
	$scope.callCarouselGallery = function(){
		$scope.allObjects = $scope.photosblackwork + $scope.photoscolor;
		$(document).ready(function(){
			var $owl = $('.owl-carousel').owlCarousel({
			    loop:false,
			    margin:10,
			    nav:false,		    
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:6
			        },
			        1000:{
			            items:4
			        }
			    }
			})
		});
	};

	$scope.callCarouselGallery(); 
	
});