'use strict';

(function(){
  angular
    .module('bourgeois')
    .controller('BourgeoisIndexController',[
        "$scope",
        BourgeoisIndexController
    ])

    function BourgeoisIndexController($scope){
      $scope.art = [{
        path: "ABC's and an AK Please.jpg",
        title: "ABC's and an AK Please",
      },
      {
        path: "Cannibal Kid.jpg",
        title: "Cannibal Kid",
      },
      {
        path: "God Of Wine.jpg",
        title: "God Of Wine",
      },
      {
        path: "Home Mirror.jpg", 
        title: "Home Mirror",
      },
      {
        path: "Just Wanted To Say Hello.jpg",
        title: "Just Wanted To Say Hello",
      },
      {
        path: "King's Mirror.jpg",
        title: "King's Mirror",
      },
      {
        path: "Liberia Mantra.jpg",
        title: "Liberia Mantra",
      },
      {
        path: "MarshMellow Queen.jpg",
        title: "MarshMellow Queen",
      },
      {
        path: "Pink Tutus and Automatica Weapons.jpg",
        title: "Pink Tutus and Automatica Weapons",
      },
      {
        path: "PolyMathic Beauty.jpg",
        title: "PolyMathic Beauty",
      },
      {
        path: "Russian King.jpg",
        title: "Russian King",
      }]
    }
}());

