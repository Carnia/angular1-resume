angular.module('Ctrl',[]).controller('NavsController',['$scope','$http',function($scope,$http){
     // body... 
     //    $http({
     //        url:'',
     //    }).success(function(){
     //        $scope.info=info;
     //    })
    $scope.navs = [
        { text: '红旅动漫', link: '#/index', icon: '' },
        { text: '连载动漫', link: '#/lianzai', icon: '' },
        { text: '专题列表', link: '#/zhuanti', icon: '' },
        { text: '关于', link: '#/about', icon: '' }
    ];
    console.log(111);
}])
// 主页
.controller('indexCtrl', ['$scope', '$http', '$rootScope', '$timeout',function ($scope, $http, $rootScope,$timeout) {
	$rootScope.loaded = false;
	$rootScope.current = 0;
	// 获得数据
	// $http({
	// 	url: 'http://czdm.ittun.com/api/getlunbo',
	// 	params: {day: 1},
	// }).success(function (info) {
	// 	// console.log(info);
	// 	// 将获得的数据放到模型上
	// 	$scope.posts = info.posts;
	// 	$scope.date = info.date;

	// 	// 成功获取数据
	// 	$rootScope.loaded = true;
	// });
	$timeout(function () {
		$rootScope.loaded = true;
	},2000)

}])
.controller('lianzaiCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {$rootScope.current = 1;}])
.controller('zhuantiCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {$rootScope.current = 2;}])
.controller('aboutCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {$rootScope.current = 3;}])
