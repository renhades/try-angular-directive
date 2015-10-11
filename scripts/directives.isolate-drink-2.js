var myModule = angular.module('MyModule', []);

myModule.controller('myCtrl', ['$scope', function ($scope) {
  $scope.ctrlFlavor = "Value defined in myCtrl";
}]);

myModule.directive('drink', function () {
  return {
    strict: 'AE',
    template: '<input type="text" ng-model="flavor"/>',
    scope: {
      flavor: '=' // 雙向數據綁定
                  // 在 directive 改 scope.flavor 的值
                  // 或外部 input tag 改 $scope.ctrlFlavor 的值
                  // 都會互相影響。
    }
  }
});