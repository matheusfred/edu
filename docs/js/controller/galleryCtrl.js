/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('galleryCtrl', function($scope, $location, $http){

	$scope.photosblackwork = [
		'img/tattoos/gallery/blackwork/01.jpg',
		'img/tattoos/gallery/blackwork/02.jpg',
		'img/tattoos/gallery/blackwork/03.jpg',
		'img/tattoos/gallery/blackwork/04.jpg',
		'img/tattoos/gallery/blackwork/05.jpg',
		'img/tattoos/gallery/blackwork/06.jpg',
		'img/tattoos/gallery/blackwork/07.jpg',
		'img/tattoos/gallery/blackwork/08.jpg',	
		'img/tattoos/gallery/blackwork/09.jpg',
		'img/tattoos/gallery/blackwork/10.jpg',		
		'img/tattoos/gallery/blackwork/11.jpg',
		'img/tattoos/gallery/blackwork/12.jpg',
		'img/tattoos/gallery/blackwork/13.jpg',
		'img/tattoos/gallery/blackwork/14.jpg',
		'img/tattoos/gallery/blackwork/15.jpg',
		'img/tattoos/gallery/blackwork/16.jpg',
		'img/tattoos/gallery/blackwork/17.jpg',
		'img/tattoos/gallery/blackwork/18.jpg',
		'img/tattoos/gallery/blackwork/19.jpg',
		'img/tattoos/gallery/blackwork/20.jpg',	
		'img/tattoos/gallery/blackwork/21.jpg',
		'img/tattoos/gallery/blackwork/22.jpg',		
		'img/tattoos/gallery/blackwork/23.jpg',
		'img/tattoos/gallery/blackwork/24.jpg',
		'img/tattoos/gallery/blackwork/25.jpg',
		'img/tattoos/gallery/blackwork/26.jpg',
		'img/tattoos/gallery/blackwork/27.jpg',
		'img/tattoos/gallery/blackwork/28.jpg',
		'img/tattoos/gallery/blackwork/29.jpg',
		'img/tattoos/gallery/blackwork/30.jpg',
		'img/tattoos/gallery/blackwork/31.jpg',
		'img/tattoos/gallery/blackwork/32.jpg',	
		'img/tattoos/gallery/blackwork/33.jpg',
		'img/tattoos/gallery/blackwork/34.jpg',		
		'img/tattoos/gallery/blackwork/35.jpg',
		'img/tattoos/gallery/blackwork/36.jpg',
		'img/tattoos/gallery/blackwork/37.jpg',
		'img/tattoos/gallery/blackwork/38.jpg',
		'img/tattoos/gallery/blackwork/39.jpg',
		'img/tattoos/gallery/blackwork/40.jpg',
		'img/tattoos/gallery/blackwork/41.jpg',
		'img/tattoos/gallery/blackwork/42.jpg',
		'img/tattoos/gallery/blackwork/43.jpg',
		'img/tattoos/gallery/blackwork/44.jpg'											
	];

	$scope.photoscolor = [
		'img/tattoos/gallery/color/01.jpg',
		'img/tattoos/gallery/color/02.jpg',
		'img/tattoos/gallery/color/03.jpg'
	];	

	$scope.photoscomic = [
		'img/tattoos/gallery/comic/01.jpg',
		'img/tattoos/gallery/comic/02.jpg',
		'img/tattoos/gallery/comic/03.jpg'
	];

	$scope.photosdots = [
		'img/tattoos/gallery/dots/01.jpg'
	];	
	
	$scope.photosfix = [
		'img/tattoos/gallery/fixs/01.jpg',
		'img/tattoos/gallery/fixs/02.jpg',
		'img/tattoos/gallery/fixs/03.jpg',
		'img/tattoos/gallery/fixs/04.jpg',
		'img/tattoos/gallery/fixs/05.jpg',
		'img/tattoos/gallery/fixs/06.jpg',
		'img/tattoos/gallery/fixs/07.jpg',
		'img/tattoos/gallery/fixs/08.jpg'
	];

	$scope.photosthin = [
		'img/tattoos/gallery/thin/01.jpg',
		'img/tattoos/gallery/thin/02.jpg',
		'img/tattoos/gallery/thin/03.jpg',
		'img/tattoos/gallery/thin/04.jpg',
		'img/tattoos/gallery/thin/05.jpg',
		'img/tattoos/gallery/thin/06.jpg',
		'img/tattoos/gallery/thin/07.jpg',
		'img/tattoos/gallery/thin/08.jpg',	
		'img/tattoos/gallery/thin/09.jpg',
		'img/tattoos/gallery/thin/10.jpg',		
		'img/tattoos/gallery/thin/11.jpg',
		'img/tattoos/gallery/thin/12.jpg',
		'img/tattoos/gallery/thin/13.jpg',
		'img/tattoos/gallery/thin/14.jpg',
		'img/tattoos/gallery/thin/15.jpg',
		'img/tattoos/gallery/thin/16.jpg',
		'img/tattoos/gallery/thin/17.jpg',
		'img/tattoos/gallery/thin/18.jpg',
		'img/tattoos/gallery/thin/19.jpg',
		'img/tattoos/gallery/thin/20.jpg',	
		'img/tattoos/gallery/thin/21.jpg',
		'img/tattoos/gallery/thin/22.jpg',		
		'img/tattoos/gallery/thin/23.jpg',
		'img/tattoos/gallery/thin/24.jpg',
		'img/tattoos/gallery/thin/25.jpg',
		'img/tattoos/gallery/thin/26.jpg',
		'img/tattoos/gallery/thin/27.jpg',
		'img/tattoos/gallery/thin/28.jpg',
		'img/tattoos/gallery/thin/29.jpg',
		'img/tattoos/gallery/thin/30.jpg',
		'img/tattoos/gallery/thin/31.jpg',
		'img/tattoos/gallery/thin/32.jpg',	
		'img/tattoos/gallery/thin/33.jpg',
		'img/tattoos/gallery/thin/34.jpg',		
		'img/tattoos/gallery/thin/35.jpg',
		'img/tattoos/gallery/thin/36.jpg',
		'img/tattoos/gallery/thin/37.jpg',
		'img/tattoos/gallery/thin/38.jpg',
		'img/tattoos/gallery/thin/39.jpg',
		'img/tattoos/gallery/thin/40.jpg',
		'img/tattoos/gallery/thin/41.jpg',
		'img/tattoos/gallery/thin/42.jpg',
		'img/tattoos/gallery/thin/43.jpg',
		'img/tattoos/gallery/thin/44.jpg',
		'img/tattoos/gallery/thin/45.jpg',
		'img/tattoos/gallery/thin/46.jpg',
		'img/tattoos/gallery/thin/47.jpg',
		'img/tattoos/gallery/thin/48.jpg',										
		'img/tattoos/gallery/thin/49.jpg',
		'img/tattoos/gallery/thin/50.jpg',
		'img/tattoos/gallery/thin/51.jpg',
		'img/tattoos/gallery/thin/52.jpg',
		'img/tattoos/gallery/thin/53.jpg'
	];


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