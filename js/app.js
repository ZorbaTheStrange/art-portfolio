'use strict';

(function(){
  angular
    .module('art', [
        'home',
        'ui.router'
    ])
    .config([
        "$stateProvider",
        RouterFunction
    ]);

  function RouterFunction($stateProvider){
    console.log('welcome');
    $stateProvider
      .state("homeIndex", {
        url: '',
        templateUrl: 'js/home/index.html',
        controller: 'HomeIndexController',
        controllerAs: 'vm'
      })
  }
}());

