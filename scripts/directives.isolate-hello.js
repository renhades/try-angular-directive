var myModule = angular.module('MyModule', []);

myModule.directive('hello', function () {
  return {
    restrict: 'AE',
    scope: {}, // 每個 hello directive 都能有自己的獨立 scope, 不會互相影響！
    template: '<div><input type="text" ng-model="userName" />{{userName}}</div>',
    replace: true
  }
});