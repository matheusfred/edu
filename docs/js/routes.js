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
      url: "/admin/dashboard",
      templateUrl: '/dashboard.html',
      controller: 'dashboardCtrl',
      params: {
        obj: null
      }
    })  
});