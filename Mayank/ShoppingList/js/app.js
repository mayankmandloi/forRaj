var app=angular.module("ShoppingList",["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when("/",{
    templateUrl:"views/list.html",
    controller:"showList"
  });
  $routeProvider.when("/addItem",{
    templateUrl:"views/addItem.html",
    controller:"showList"
  });

});

app.service("ShoppingService" ,function () {
  var ShoppingService = {};
  function getId() {
    if (ShoppingService.items.length) {
      return ++(ShoppingService.items[ShoppingService.items.length-1].id);
    }
    else return 0;
  }
  ShoppingService.items=[];
  ShoppingService.addItems=function(item)
  {
    var obj={};
    obj.id=getId();
    obj.name=item;
    ShoppingService.items.push(obj);
  };
  return ShoppingService;
});

app.controller("showList",function ($scope,ShoppingService) {
$scope.items=ShoppingService.items;
$scope.addItems=function (item) {
    ShoppingService.addItems(item);
};
});
