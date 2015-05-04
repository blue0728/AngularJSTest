define(['app', 'services/services'], function (app) {
    function PhoneListController($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderPorp = 'time';
    }

    app.controller('PhoneListController', ['$scope', 'Phone', PhoneListController]);
})


