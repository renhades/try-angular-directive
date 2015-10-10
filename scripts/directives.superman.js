var myModule = angular.module('MyModule', []);

myModule.directive('superman', function () {
  return {
    scope: {}, // 創造獨立的 scope
    restrict: 'AE',
    controller: function ($scope) { // 這裏的 controller, 跟外部 MVC 的 controller 不一樣，給指令使用的 controller, 也可以給外部呼叫使用的。
      $scope.abilities = [];
      this.addStrength = function () {
        $scope.abilities.push('Strength');
      }
      this.addSpeed = function () {
        $scope.abilities.push('Speed');
      }
      this.addLight = function () {
        $scope.abilities.push('Light');
      }
    },
    link: function (scope, element, attr) {
      element.addClass('btn btn-primary');
      element.bind("mouseenter", function () {
        console.log(scope.abilities);
      });
    }
    // Q: 寫 Directive 的時候，邏輯要寫在 controller 還是 link 裡面呢？
    // A: 
    // controller 寫：『想要給外部使用的方法』
    // link 寫：『處理內部事情，例如：給元素綁定事件、綁定數據』
  }
});

myModule.directive('strength', function () {
  return {
    require: '^superman', // 繼承 superman 這個 Directive
    link: function (scope, element, attr, supermanCtrl) {
      supermanCtrl.addStrength();
    }
  }
});

myModule.directive('speed', function () {
  return {
    require: '^superman', // 繼承 superman 這個 Directive
    link: function (scope, element, attr, supermanCtrl) {
      supermanCtrl.addSpeed();
    }
  }
});

myModule.directive('light', function () {
  return {
    require: '^superman', // 繼承 superman 這個 Directive, 一旦繼承，ng 會自動幫你注入到 link function
    link: function (scope, element, attr, supermanCtrl) {
      supermanCtrl.addLight();
    }
  }
});