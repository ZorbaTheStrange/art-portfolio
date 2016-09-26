'use strict';

(function(){
  angular
    .module('art', [
        'home',
        'bourgeois',
        'ui.router'
    ])
    .config([
        "$stateProvider",
        RouterFunction
    ]);

  function RouterFunction($stateProvider){
    $stateProvider
      .state("homeIndex", {
        url: '',
        templateUrl: 'js/home/index.html',
      })
    .state("bourgeoisIndex", {
      url:"/bourgeois",
      templateUrl: 'js/bourgeois/index.html',
      controller: 'BourgeoisIndexController',
      controllerAs: 'vm'
    })
  }
}());

