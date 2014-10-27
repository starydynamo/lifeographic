
var lifeographicSubmissions = angular.module('lifeographicSubmissions', [], function($interpolateProvider) {
        $interpolateProvider.startSymbol('{');
        $interpolateProvider.endSymbol('}');
	});


lifeographicSubmissions.controller('SubmissionsController', function($scope, $http) {

  $http.get('pullSubmissions')
	   .success(function(data) {
			$scope.submissions = data;
	   });

  // $scope.submissions = [{"class":"info","category":"Assets","date":"2014-09-02 12:53:53","reasons":["Travel","House"],"value":"Very Good"},{"class":"success","category":"Health","date":"2014-09-02 12:53:37","reasons":["Weight loss"],"value":"Good"},{"class":"info","category":"Assets","date":"2014-08-31 17:57:59","reasons":["House"],"value":"OK"},{"class":"warning","category":"Mood","date":"2014-08-31 17:26:00","reasons":["Happy"],"value":"Very Good"},{"class":"warning","category":"Mood","date":"2014-08-31 17:25:38","reasons":["Excited","Relaxed"],"value":"Good"},{"class":"info","category":"Assets","date":"2014-08-31 17:24:14","reasons":["Job"],"value":"Very Good"},{"class":"success","category":"Health","date":"2014-08-31 04:39:34","reasons":["Diet"],"value":"OK"},{"class":"danger","category":"Love","date":"2014-08-17 02:53:32","reasons":["Loneliness"],"value":"Very Bad"},{"class":"danger","category":"Love","date":"2014-08-17 02:53:19","reasons":["Intimacy"],"value":"OK"},{"class":"danger","category":"Love","date":"2014-08-17 02:53:07","reasons":["Kissing"],"value":"Very Good"},{"class":"danger","category":"Love","date":"2014-08-17 02:53:01","reasons":["Argument"],"value":"Bad"},{"class":"danger","category":"Love","date":"2014-08-17 02:52:53","reasons":["Friendship"],"value":"Very Good"},{"class":"danger","category":"Love","date":"2014-08-17 02:52:47","reasons":["Sex"],"value":"Good"},{"class":"danger","category":"Love","date":"2014-08-17 02:35:11","reasons":["Kissing"],"value":"Good"}];

});