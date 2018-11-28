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
		{photo:'img/tattoos/gallery/blackwork/01.jpg'},
		{photo:'img/tattoos/gallery/blackwork/02.jpg'},
		{photo:'img/tattoos/gallery/blackwork/03.jpg'},
		{photo:'img/tattoos/gallery/blackwork/04.jpg'},
		{photo:'img/tattoos/gallery/blackwork/05.jpg'},
		{photo:'img/tattoos/gallery/blackwork/06.jpg'},
		{photo:'img/tattoos/gallery/blackwork/07.jpg'},
		{photo:'img/tattoos/gallery/blackwork/08.jpg'},	
		{photo:'img/tattoos/gallery/blackwork/09.jpg'},
		{photo:'img/tattoos/gallery/blackwork/10.jpg'},		
		{photo:'img/tattoos/gallery/blackwork/11.jpg'},
		{photo:'img/tattoos/gallery/blackwork/12.jpg'},
		{photo:'img/tattoos/gallery/blackwork/13.jpg'},
		{photo:'img/tattoos/gallery/blackwork/14.jpg'},
		{photo:'img/tattoos/gallery/blackwork/15.jpg'},
		{photo:'img/tattoos/gallery/blackwork/16.jpg'},
		{photo:'img/tattoos/gallery/blackwork/17.jpg'},
		{photo:'img/tattoos/gallery/blackwork/18.jpg'},
		{photo:'img/tattoos/gallery/blackwork/19.jpg'},
		{photo:'img/tattoos/gallery/blackwork/20.jpg'},	
		{photo:'img/tattoos/gallery/blackwork/21.jpg'},
		{photo:'img/tattoos/gallery/blackwork/22.jpg'},		
		{photo:'img/tattoos/gallery/blackwork/23.jpg'},
		{photo:'img/tattoos/gallery/blackwork/24.jpg'},
		{photo:'img/tattoos/gallery/blackwork/25.jpg'},
		{photo:'img/tattoos/gallery/blackwork/26.jpg'},
		{photo:'img/tattoos/gallery/blackwork/27.jpg'},
		{photo:'img/tattoos/gallery/blackwork/28.jpg'},
		{photo:'img/tattoos/gallery/blackwork/29.jpg'},
		{photo:'img/tattoos/gallery/blackwork/30.jpg'},
		{photo:'img/tattoos/gallery/blackwork/31.jpg'},
		{photo:'img/tattoos/gallery/blackwork/32.jpg'},	
		{photo:'img/tattoos/gallery/blackwork/33.jpg'},
		{photo:'img/tattoos/gallery/blackwork/34.jpg'},		
		{photo:'img/tattoos/gallery/blackwork/35.jpg'},
		{photo:'img/tattoos/gallery/blackwork/36.jpg'},
		{photo:'img/tattoos/gallery/blackwork/37.jpg'},
		{photo:'img/tattoos/gallery/blackwork/38.jpg'},
		{photo:'img/tattoos/gallery/blackwork/39.jpg'},
		{photo:'img/tattoos/gallery/blackwork/40.jpg'},
		{photo:'img/tattoos/gallery/blackwork/41.jpg'},
		{photo:'img/tattoos/gallery/blackwork/42.jpg'},
		{photo:'img/tattoos/gallery/blackwork/43.jpg'},
		{photo:'img/tattoos/gallery/blackwork/44.jpg'}							
	];

	$scope.callCarouselGallery = function(){
		$(document).ready(function(){
			$('.owl-carousel').owlCarousel({
			    loop:true,
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