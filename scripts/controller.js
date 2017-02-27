angular.module('Ctrl', [])
    //导航
    .controller('NavsController', ['$scope', '$http', function($scope, $http) {
        //不使用http请求
        $scope.navs = [
            { text: '个人介绍', link: '#/index', icon: 'icon-user' },
            { text: 'HTML5、CSS3', link: '#/h5c3', icon: 'icon-html-five2' },
            { text: '流行框架', link: '#/popular', icon: 'icon-newspaper' },
            { text: '其他', link: '#/about', icon: 'icon-mail4' }
        ];
        console.log('controller');
    }])
    // 主页
    .controller('indexCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
        $rootScope.loaded = false;
        $rootScope.current = 0;
        $scope.demos = [
            { text: '工作经历', link: '#/h5c3', icon: 'icon-html-five2' },
            { text: '学习经历', link: '#/index', icon: 'icon-user' },
            { text: '主要技能', link: '#/popular', icon: 'icon-newspaper' },
            { text: '兴趣爱好', link: '#/about', icon: 'icon-mail4' }
        ];
        $scope.index = 0;
        //获得数据
        $scope.change = function(index) {
            $scope.index = index || 0;
            console.log($scope.index);
            // $http({
            // url: '',
            // params: {day: 1},
            // }).success(function (info) {
            // 	// console.log(info);
            // 	// 将获得的数据放到模型上
            // 	// 成功获取数据
            // 	$rootScope.loaded = true;
            // });
        }
        $timeout(function() {
            $rootScope.loaded = true;
        }, 1000)

    }])
    .controller('h5c3Ctrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
        $rootScope.current = 1;
        $rootScope.loaded = false;
        $timeout(function() {
            $rootScope.loaded = true;
        }, 500)
    }])
    .controller('popularCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
        $rootScope.current = 2;
        $rootScope.loaded = false;
        $timeout(function() {
            $rootScope.loaded = true;
        }, 500)
    }])
    .controller('aboutCtrl', ['$scope', '$http', '$rootScope', '$timeout', function($scope, $http, $rootScope, $timeout) {
        $rootScope.current = 3;
        $rootScope.loaded = false;
        $timeout(function() {
            $rootScope.loaded = true;
        }, 500)
    }])
