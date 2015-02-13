/**
 * Created by sbunke on 2/12/2015.
 */
angular.module('MonitorCtrl', ['MonitorService']).controller('MonitorController', ['$scope', 'Monitor', function ($scope, Monitor) {

    $scope.tagline = 'This is the monitor page';

    var mon = Monitor;

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