/**
 * Created by Administrator on 2015/4/20.
 */
define(['angular', 'angular-route','angular-resource'], function (angular) {

    var app = angular.module('myApp', ['ngRoute','ngResource']);

    app.init = function () {
        angular.bootstrap(document, ['myApp']);
    }
    return app;
});

