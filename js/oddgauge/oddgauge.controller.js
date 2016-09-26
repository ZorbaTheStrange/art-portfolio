'use strict';

(function(){
  angular
    .module('oddgauge')
    .controller('OddgaugeIndexController', [
        '$scope',
        OddgaugeIndexController
    ]);

  function OddgaugeIndexController($scope){
    $scope.art = [{
      path: "oddgauge/O.G.one.jpg",
      title: "O.G. One"
    },
    {
      path: "oddgauge/O.G.two.jpg",
      title: "O.G. Two"
    },
    {
      path: "oddgauge/O.G.three.jpg",
      title: "O.G. Three"
    },
    {
      path: "oddgauge/O.G.four.jpg",
      title: "O.G. Four"
    },
    {
      path: "oddgauge/O.G.five.jpg",
      title: "O.G. Five"
    }]
  }
}());
