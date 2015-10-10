var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl', ['$scope', function ($scope) {
  $scope.loadData = function () {
    console.log('數據加載中...');
  };
}]);

myModule.directive('loader', function () {
  return {
    restrict: 'AE',
    link: function (scope, element, attr) {
      element.bind("mouseenter", function () {
        scope.loadData();
      });
    }
  }
});