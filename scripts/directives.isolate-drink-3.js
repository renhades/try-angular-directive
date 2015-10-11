var myModule = angular.module('MyModule', []);

myModule.controller('myCtrl', ['$scope', function ($scope) {
  $scope.sayHello = function (name) {
    alert('Hello, '+ name);
  }
}]);

myModule.directive('greeting', function () {
  return {
    strict: 'AE',
    template: '<input type="text" ng-model="userName"/><br>'+
              '<button class="btn btn-primary" ng-click="greet({name: userName})">Greet</button>',
              // 2. Button 的傳入參數作法很特殊，要注意：在 Directive 內呼叫方法時才需要這樣。
    scope: {
      greet: '&' 
      // 使用情境：
      // 要從外部 View Model 呼叫 func.
      // 或是從 Directive 觸發事件
      // 1. 綁定 Directive 內的 greet 屬性：<greeting greet="sayHello(name)">
      // 表示在 Directive 內，使用 scope.greet() 時，會執行 sayHello()
      // 更詳細的解說：http://blog.darkthread.net/post-2015-02-27-angular-notes-23.aspx
    }
  }
});