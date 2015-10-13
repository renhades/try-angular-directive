var myModule = angular.module('MyModule', []);

myModule.controller('myController', function ($scope) {
  $scope.title = '點擊展開';
  $scope.text = '我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～我是要顯示的內容～';
});

myModule.directive('expander', function () {
  return {
    strict: 'AE',
    replace: true,    // 取代原本的 HTML 元素
    transclude: true, // 將原本的 HTML 移到 template 定義的 HTML 元素內
    scope: {
      title: '=expanderTitle'
    },
    template: 
    '<div>' +
    '<div class="title" ng-click="toggle()">{{title}}</div>' +
    '<div class="body" ng-show="showMe" ng-transclude></div>' +
    '</div>',
    // '_template_expander.html',
    link: function (scope, element, attrs) {
      var result1 = document.getElementsByClassName('title');
      var result2 = document.getElementsByClassName('body');

      firstElem = angular.element(result1);
      secondElem = angular.element(result2);

      firstElem.css('border', '2px solid red');
      firstElem.css('margin', '5px auto');
      firstElem.css('padding', '5px');
      secondElem.css('border', '2px solid blue');
      secondElem.css('padding', '5px');

      scope.showMe = false;
      scope.toggle = function () {
        scope.showMe = !scope.showMe;
      }
    }
  }
});