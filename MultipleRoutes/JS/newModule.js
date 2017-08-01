var app = angular.module("newModule",["ngRoute"]);

app.controller("ShowName",function($scope,$route){
    $scope.name="Web Bhumi";
    $scope.$on("$locationChangeStart",function(event,next,current){
        console.log(next);
        if(!confirm("Are you really want to go on next page?? "+next))
            {
                event.preventDefault();

            }
    })

});


app.config(function($routeProvider){
    $routeProvider.when("/data",
    {
            template:"Welcome to {{name}}",
            controller:"ShowName"
    });
    

});



app.config(function($routeProvider){
    $routeProvider.when("/data",
    {
            template:"Tata {{name}}",
            controller:"ShowName"
    });
    

});

 app.config(function($routeProvider){
    $routeProvider.when("/akhilesh",
    {
            template:"Hello I am Akilesh"
    });
    
});






app.config(function($routeProvider){
    $routeProvider.when("/mayank",
    {
            templateUrl:"templates/showName.html",
            controller:"ShowName"
    });
        
    
});
