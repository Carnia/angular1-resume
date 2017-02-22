var App = angular.module('App', ['ngRoute', 'Ctrl']);
App.run(['$rootScope', function($rootScope) {
    $rootScope.collapsed = false;
    $rootScope.title = "Danny's Demo";
    $rootScope.loaded = false;
    $rootScope.current = 0;
    $rootScope.toggle = function(text) {
        if (text) {
            $rootScope.title = text;
        }
        $rootScope.collapsed = !$rootScope.collapsed;
        var navs = document.querySelectorAll('.navs dd');
        if ($rootScope.collapsed) {
            // console.log('向右');
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                navs[i].style.transitionDelay = '0.2s';
            }
        } else {
            // console.log('向左');
            var len = navs.length - 1;
            for (var i = len; i >= 0; i--) {
                navs[i].style.transform = 'translate(-100%)';
                // 5 4 3 2 1 0
                // len - 5 0 
                // len - 4 1
                // len - 3 2
                // len - 2 3
                // len - 1 4
                // len - 0 5
                navs[i].style.transitionDuration = (len - i) * 0.2 + .5 + 's';
                navs[i].style.transitionDelay = '';
            }
        }
    }
}])
App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: './views/index.html',
        controller: 'indexCtrl'
    }).when('/lianzai', {
        templateUrl: './views/lianzai.html',
        controller: 'lianzaiCtrl'
    }).when('/zhuanti', {
        templateUrl: './views/zhuanti.html',
        controller: 'zhuantiCtrl'
    }).when('/about', {
        templateUrl: './views/about.html',
        controller: 'aboutCtrl'
    }).otherwise({
        redirectTo: '/index'
    })
}])
