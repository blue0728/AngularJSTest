/**
 * Created by Administrator on 2015/4/22 0022.
 */
'use strict';
require([
    'app',
    'controllers/myCtrl',
    'controllers/detailCtrl',
    'routes/routes',
    'filters/myFilters',
    'directives/drag'
], function (app) {
    app.init();
});