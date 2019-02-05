/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider) {
  $stateProvider
    .state('index', {
      url: "",
      templateUrl: '/home.html'
    }) 
    .state('sobre', {
      url: "/sobre",
      templateUrl: '/sobre.html',
      controller: 'aboutCtrl'
    })  

    .state('galeria', {
      url: "/galeria",
      templateUrl: '/galeria.html',
      controller: 'galleryCtrl'
    })
    .state('galeria.blackwork', {
        url: '/blackwork',
        controller: 'galleryCtrl',
        templateUrl: '/blackwork.html'
    })  
    .state('galeria.colorfull', {
        url: '/colorfull',
        controller: 'galleryCtrl',
        templateUrl: '/colorfull.html'
    })     
    .state('galeria.comictattoo', {
        url: '/comictattoo',
        controller: 'galleryCtrl',
        templateUrl: '/comictattoo.html'
    })  
    .state('galeria.dotstattoo', {
        url: '/dotstattoo',
        controller: 'galleryCtrl',
        templateUrl: '/dotstattoo.html'
    })
    .state('galeria.fixment', {
        url: '/fixment',
        controller: 'galleryCtrl',
        templateUrl: '/fixment.html'
    })  
    .state('galeria.thintattoo', {
        url: '/thintattoo',
        controller: 'galleryCtrl',
        templateUrl: '/thintattoo.html'
    }) 

    .state('contato', {
      url: "/contato",
      templateUrl: '/contato.html',
      controller: 'contactCtrl'
    })  
    
    .state('admin', {
      url: "/admin",
      templateUrl: '/admin.html',
      controller: 'adminCtrl'
    })  
    .state('dashboard', {
      url: "admin/cms",
      templateUrl: '/dashboard.html',
      controller: 'dashboardCtrl',
      params: {
        obj: null
      }
    })
    .state('dashboard.galeria', {
        url: '/galeria',
        templateUrl: '/cmsgallery.html',
        controller: 'dashboardCtrl'
    })      
    .state('dashboard.contato', {
        url: '/contato',
        templateUrl: '/cmscontact.html',
        controller: 'dashboardCtrl'
    })       
});