var app = angular.module('myApp3',[]);

app.controller('myController3',["$scope", ($scope)=>{
    
}]);

app.directive("myDirc",()=>{
    return{
        restrict:'A',
        template: "<h1>Hello Subhajeet</h1>",
        controller: 'myController3'
    }
})

app.directive("myDirc2",()=>{
    return{
        restrict:'E',
        template: "<h1>This is custom directive</h1>",
        controller: 'myController3'
    }
})