var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl : "11.html",
        controller : "myContr"
    });
    $routeProvider.when("/test", {
        templateUrl : "12.html",
        controller : "myContr"
    });
    $routeProvider.when("/raj",{
      templateUrl : "13.html"
    });
});
app.controller("myContr",function($scope) {
  $scope.name="Raj";
})
