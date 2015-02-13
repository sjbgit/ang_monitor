/**
 * Created by sbunke on 2/12/2015.
 */
angular.module('MonitorCtrl', ['MonitorService']).controller('MonitorController', ['$scope', 'Monitor', 'Test', function ($scope, Monitor, Test) {

    /*
     http://devdactic.com/improving-rest-with-ngresource/
    $resource has:
    { 'get':    {method:'GET'},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'} };
    */

    $scope.tagline = 'This is the monitor page';

    var mon = Monitor;

    var test = Test;

    console.log(test);


    $scope.get = function() {
      //alert('opened');
        //$scope.users = Test.query();
        var query = Test.query();
        query.$promise.then(function(data) {
            $scope.users = data;
            // Do whatever when the request is finished
        });
    };

    $scope.getWithId = function() {
        //var user = {user: 1};

        var query = Test.get({user: 1}); //.get(user);
        query.$promise.then(function(data) {
            $scope.users = data;
            // Do whatever when the request is finished
        });

    };

    $scope.save = function() {
        var user = {name: 'Saimon', email: 'saimon@devdactic.com'};
        var query = Test.save(user);
        query.$promise.then(function(data) {
            $scope.users = data;
            // Do whatever when the request is finished
        });

    };

    mon.getCount()
        .success(function (data) {
            $scope.count = data[0].count;

            console.log(data);

        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });

    mon.getTopLogs()
        .success(function (data) {
            $scope.logs = data;

            console.log(data);

        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });

    console.log(mon);

}]);