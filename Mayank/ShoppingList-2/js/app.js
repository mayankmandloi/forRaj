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
  $routeProvider.when("/addItem/edit/:id",{
    templateUrl:"views/addItem.html",
    controller:"showList"
  });

});

app.service("ShoppingService" ,function () {
  var ShoppingService = {};
  function getId() {
    if (ShoppingService.items.length) {
      return 1+(ShoppingService.items[ShoppingService.items.length-1].id);
    }
    else return 1;
  };
ShoppingService.findById=  function (id) {
        for(item in ShoppingService.items)
        {
          if (ShoppingService.items[item].id==id) {
                return ShoppingService.items[item];
          }
        }
  }
  ShoppingService.items=[];
  ShoppingService.addItems=function(item)
  {
    if (!item.id) {
    var obj={};
    obj.id=getId();
    obj.name=item.name;
    ShoppingService.items.push(obj);
  }
  else {
    for(it in ShoppingService.items)
    {

      if(ShoppingService.items[it].id==item.id)
      {
        ShoppingService.items[it].name==item.name;

      }

    }
  }
  };
  return ShoppingService;
});

app.controller("showList",function ($scope,ShoppingService,$routeParams) {
if($routeParams.id)
{
      $scope.item= ShoppingService.findById($routeParams.id);
}
$scope.items=ShoppingService.items;
$scope.addItems=function () {

    ShoppingService.addItems($scope.item);


};
});
