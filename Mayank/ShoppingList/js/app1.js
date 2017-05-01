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

app.controller("showList",function ($scope) {
$scope.items=[];
console.log($scope.items);
console.log("Controller chal raha hai");
$scope.addItems=function (item) {
    $scope.items[$scope.items.length]=item;
    console.log($scope.items);
    console.log("addItem Chal raha hai");
};
});
