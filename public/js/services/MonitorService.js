/**
 * Created by sbunke on 2/12/2015.
 */
angular.module('MonitorService', ['ngResource'])

    .factory('Monitor', ['$http', '$resource', function ($http, $resource) {
        var urlBase = '/api/customers';
        var dataFactory = {};

        dataFactory.getCount = function() {
          return $http.get('/api/monitor');
        };

        dataFactory.getTopLogs = function () {
            return $http.get('/api/monitor/toplogs');
        };

        dataFactory.getCustomers = function () {
            return $http.get(urlBase);
        };

        dataFactory.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        dataFactory.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        dataFactory.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        dataFactory.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        dataFactory.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        };

        return dataFactory;

    }])

    .factory('Post', ['$resource', function ($http, $resource) {
        return $resource('/api/post');

    }])

    ;