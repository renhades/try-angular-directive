var myModule = angular.module("MyModule",[]);

myModule.directive("hello", function () {
  return {
    restrict: 'AEMC',
    template: '<div>Hi, erevyone!</div>',
    replace: true
  }
});  