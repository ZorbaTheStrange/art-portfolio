'use strict';

(function(){
  angular
    .module('art', [
        'home',
        'bourgeois',
        'oddgauge',
        'poster',
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
      templateUrl: 'js/index.html',
      controller: 'BourgeoisIndexController',
      controllerAs: 'vm'
    })
    .state("oddgaugeIndex", {
      url:"/oddgauge",
      templateUrl: 'js/index.html',
      controller: 'OddgaugeIndexController',
      controllerAs: 'vm'
    })
    .state("posterIndex", {
      url: "/poster",
      templateUrl: "js/index.html",
      controller: "PosterIndexController",
      conrollerAs: "vm"
    })
  }
}());

