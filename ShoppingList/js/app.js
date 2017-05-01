var app=angular.module("ShoppingList",["ngRoute"]);
app.controller("showList",function ($scope) {
$scope.items=["milk","suger","water"];
});
app.config(function ($routeProvider) {
  $routeProvider.when("/",{
    templateUrl:"views/list.html",
    controller:"showList"
  });
});
