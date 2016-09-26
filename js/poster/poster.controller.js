'use strict';

(function(){
  angular
    .module('poster')
    .controller('PosterIndexController', [
        '$scope',
        PosterIndexController
    ]);

  function PosterIndexController($scope){
    $scope.art = [{
      path: "posters/Little Girl In Blue Dress.jpg",
      title: "Little Girl In Blue Dress"
    },
    {
      path: "posters/Make Friends With Your Monsters.jpg",
      title: "Make Friends With Your Monsters"
    },
    {
      path: "posters/Pablo's Bed.jpg",
      title: "Pablo's Bed"
    }]
  }
}());


    

    
