 var myModule = angular.module('MyModule', []);

 myModule.directive('alotofhello', function () {
  return {
    restrict: 'A',

    compile: function (element, attrs, translcude) {
      console.log("在這裡使用 compile 改變 directive 的 template!");
      var template = element.children().clone();
      console.log(template);
      for ( i = 0; i < attrs.alotofhello - 1; i ++) {
        element.append(template.clone());
      }
      return function (scope, element, attrs, controller) {
        console.log("這裏回傳的是 link function");
        // scope 只會在 link 的時候被綁到 element 上，如果在 compile 階段操作 scope，會出錯。
        // 在 Directive 的多個 Instances，compile 只會執行一次，link 則會執行多次。
        // link 使用時機：為了幫 Model 跟 View 建立關聯，可以在 Element 上註冊事件的監聽
        // compile 使用時機：對指令的 tempalte 作轉換，就像此例
      }
    }
    // , link: function () {
    //   console.log("這裏的 link function 不會起作用");
    // }

    // ** compile 跟 link 不能同時出現。
  }
 });