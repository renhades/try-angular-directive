var myModule = angular.module('MyModule', []);

myModule.controller('myCtrl', ['$scope', function ($scope) {
  $scope.ctrlflavor = "Value defined in myCtrl";
}]);

myModule.directive('drink', function () {
  return {
    strict: 'AE',
    template: '<div>{{flavor}}</div>',
    scope: {
      flavor: '@' // 注意：傳遞的是字串，不是 Object
                  // 綁定值的方式，跟下面註解的 link func 相同。
    }


    // link: function (scope, element, attr) { // 將 Controller 定義的值，傳遞到 Directive 裡面。
    //   scope.flavor = attr.flavor;           // scope.flavor 為 drink 內部的值
    //                                         // attr.flavor 為 drink flavor 屬性的值，
    //                                         // 為 Controller 定義的 {{ ctrlflavor}} 的值
    // }
  }
});