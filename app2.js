var app = angular.module('myApp1',[]);

app.controller('myController1',["$scope", ($scope)=>{

    $scope.form={};

    $scope.addReview = ()=>{
        alert($scope.form)
        $scope.reviews.push($scope.form);
        $scope.form={};
    };

    $scope.reviews=[
        {
            comments:"this looks good",
            reviewer:"Subhajeet"
        },
        {
            comments:"Awesome looking",
            reviewer:"Ankita"
        }
    ]

    
}]);