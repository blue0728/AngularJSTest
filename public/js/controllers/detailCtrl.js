/**
 * Created by Administrator on 2015/4/23 0023.
 */
define(['app'], function (app) {

    function PhoneDetailController($scope, $routeParams, PhoneDetail) {
        $scope.phones = PhoneDetail.get({
            phoneId: $routeParams.id
        }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImg = function (img) {
            $scope.mainImageUrl = img;
        }
    }

    app.controller('PhoneDetailController', ['$scope', '$routeParams', 'PhoneDetail', PhoneDetailController]);
})