demoApp.controller('customerController', function ($scope, $filter, customerFactory) {
    $scope.customers = customerFactory.getCustomers();

    $scope.addCustomer = function () {
        var newCustomer = {
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        };
        customerFactory.addCustomers(newCustomer);
        $scope.newCustomer.name = "";
        $scope.newCustomer.city = "";
    };

    $scope.nameCounted = $scope.customers.length;
    $scope.$watch("filter.name", function (query) {
        $scope.nameCounted = $filter("filter")($scope.customers, query).length;
    });

    $scope.cityCounted = $scope.customers.length;
    $scope.$watch("filter.city", function (query) {
        $scope.cityCounted = $filter("filter")($scope.customers, query).length;
    });

});