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
        path: "/art-portfolio-angularjs/bourgeois/ABC's and an AK Please.jpg",
        title: "ABC's and an AK Please",
      },
      {
        path: "bourgeois/Cannibal Kid.jpg",
        title: "Cannibal Kid",
      },
      {
        path: "bourgeois/God Of Wine.jpg",
        title: "God Of Wine",
      },
      {
        path: "bourgeois/Home Mirror.jpg", 
        title: "Home Mirror",
      },
      {
        path: "bourgeois/Just Wanted To Say Hello.jpg",
        title: "Just Wanted To Say Hello",
      },
      {
        path: "bourgeois/King's Mirror.jpg",
        title: "King's Mirror",
      },
      {
        path: "bourgeois/Liberia Mantra.jpg",
        title: "Liberia Mantra",
      },
      {
        path: "bourgeois/MarshMellow Queen.jpg",
        title: "MarshMellow Queen",
      },
      {
        path: "bourgeois/Pink Tutus and Automatica Weapons.jpg",
        title: "Pink Tutus and Automatica Weapons",
      },
      {
        path: "bourgeois/PolyMathic Beauty.jpg",
        title: "PolyMathic Beauty",
      },
      {
        path: "bourgeois/Russian King.jpg",
        title: "Russian King",
      }]
    }
}());

