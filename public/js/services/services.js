/**
 * Created by Administrator on 2015/4/24 0024.
 */
define(['app'], function (app) {
    app.factory('Phone', function ($resource) {
        return $resource('json/list.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    });
    app.factory('PhoneDetail', function ($resource) {
        return $resource('json/detail.json', {}, {
            query: {
                method: 'GET',
                params: {
                    phoneId:'phones'
                },
                isArray: true
            }
        });
    });
})