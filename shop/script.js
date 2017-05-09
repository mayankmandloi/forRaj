var app = angular.module('myModule', ['ngRoute']);
        app.controller('myController', function($scope,addService)
                    {
                        $scope.items=addService1.items;
                        $scope.addItem= function(item){
                            addService1.addItems(item);
                        };
                        $scope.deleteItem=function(deletepro){
                            var num= $scope.items.indexOf(deletepro);
                            $scope.items.splice(num,1);
                        };

                    });
        
        app.config(function ($routeProvider) {
          $routeProvider.when("/",{
            templateUrl:"home.html",
            controller:"myController"
          });
          $routeProvider.when("/addItem",{
            templateUrl:"additem.html",
            controller:"myController"
          });

        });
        
        app.service('addService',function(){
            addService1={};
            addService1.items={};
            addService1.addItems=function(item)
            {
                var obj={};
                obj.id=getId();
                obj.name=item;
                addService1.items[addService1.items.length]=obj;
            };
            var getId= function(){
                 
                  if(addService1.items.length)
                    {
                        
                        return (addService1.items[addService1.items.length-1].id);
                    }
                    else
                    {
                            return 0;
                    }
                };
            return addService1;
        });