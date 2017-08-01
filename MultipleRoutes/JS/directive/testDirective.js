
app.directive("webBhumi",function(){

return {
    templateUrl:"templates/forDIrective.html",
    scope:{
        dataName: '=tdata'
    },
    restrict: 'E'
}
});