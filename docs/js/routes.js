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
      templateUrl: '/sobre.html'
    })  
    .state('galeria', {
      url: "/galeria",
      templateUrl: '/galeria.html'
    })
    .state('contato', {
      url: "/contato",
      templateUrl: '/contato.html',
      controller: 'contactCtrl'
    })   
});