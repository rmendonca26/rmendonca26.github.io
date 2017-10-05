// Define the `resumeApp` module
var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('ResumeController', function ResumeController($scope, $http) {
  $scope.resume = [];

  $http({
    method: 'GET',
    url: 'resume.json'
  }).then(function successCallback(response) {
      $scope.resume = response.data;
      console.log($scope.resume);
    }, function errorCallback(response) {
      console.log("There seems to be an error with the get request")
    });


  

});

