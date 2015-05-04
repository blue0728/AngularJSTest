/**
 * Created by Administrator on 2015/4/24 0024.
 */
define(['app'], function (app) {
    app.filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        }
    });
})