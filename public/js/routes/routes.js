define(['app'], function (app) {
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'list.html',
                controller: 'PhoneListController'
            })
            .when('/phones/:id', {
                templateUrl: 'detail.html',
                controller: 'PhoneDetailController'
            });

       $locationProvider.html5Mode(true);
    }]);
})


