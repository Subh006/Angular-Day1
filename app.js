var app = angular.module('myApp',[]);

app.controller('myController',['$scope', ($scope)=>{
    $scope.fname="Subhajeet";
    $scope.lname="Mohanty";
    $scope.age=25;

    $scope.fullname = () => {return $scope.fname + " " + $scope.lname};

    $scope.isSpy=true;
    $scope.codeName="Action Kamen";

    $scope.employees = [
        {
            fname:"Subhajeet",
            lname:"Mohanty",
            salary:28000
        },
        {
            fname:"Ankita",
            lname:"Swain",
            salary:15000
        },
        {
            fname:"Priyanka",
            lname:"Priyadrsinee",
            salary:25000
        },
        {
            fname:"Subhankar",
            lname:"Mohanty",
            salary:55000
        }
    ]

    $scope.word;

    $scope.count=0;

}]);