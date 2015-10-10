var myModule = angular.module('MyModule', []);

myModule.controller('MyCtrl1', ['$scope', function ($scope) {
  $scope.loadData1 = function () {
    console.log('1號數據加載中...');
  };
}]);

myModule.controller('MyCtrl2', ['$scope', function ($scope) {
  $scope.loadData2 = function () {
    console.log('2號數據加載中...');
  }
}]);

myModule.directive('loader', function () {
  return {
    restrict: 'AE',
    link: function (scope, element, attr) {
      element.bind("mouseenter", function () {
        scope.$apply(attr.howtoload); //注意: 呼叫屬性的方法時，要小寫
      });
    }
  }
});