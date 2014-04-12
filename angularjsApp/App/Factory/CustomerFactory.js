demoApp.factory('customerFactory', function () {
    var factoryObj = {};
    var customers = [
        { name: 'John Smith', city: 'Phoenix' },
        { name: 'John Doe', city: 'New York' },
        { name: 'Jane Doe', city: 'San Francisco' }
    ];
    factoryObj.getCustomers = function () {
        return customers;
    };
    factoryObj.addCustomers = function (newCustomer) {
        customers.push({
            name: newCustomer.name,
            city: newCustomer.city
        });
    };
    return factoryObj;
});