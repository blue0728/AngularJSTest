/**
 * Created by Administrator on 2015/4/22 0022.
 */
// require模块请求配置
require.config({
    urlArgs: 'v=' + (new Date()).getTime(),
    /*模块路径*/
    baseUrl: 'js/',
    paths: {
        'angular': 'angular/angular.min',
        'angular-route': 'angular/angular-route.min',
        'angular-resource': 'angular/angular-resource.min'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: "angular-route"
        },
        'angular-resource': {
            deps: ['angular'],
            exports: "angular-resource"
        }
    },
    priority: [
        "angular"
    ]
});