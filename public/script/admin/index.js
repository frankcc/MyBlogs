var indexApp = angular.module('indexapp', []);

indexApp.controller('articleList', function($scope, $http) {
	$scope.lists = []
	$scope.count=0
	$scope.page = 1
	$scope.cateId = 1
	$scope.load  = function() {
		$scope.cateId= $('.cate').val();
		console.log($scope.page)
		$http.get('./admin/cate/'+$scope.cateId+'/' + $scope.page)
			.success(function(data) {
				$scope.lists = data.articles;

			});
	}
})
// indexApp.directive("listItem", function() {
// 	return {
// 		scope: {
// 			lists: '=info'
// 		},
// 		restrict: "AE",
// 		template: "<tbody ng-repeat='item in lists'><tr><td ng-bind='item.company'></td><td ng-bind='item.period'></td><td ng-bind='item.scale'></td><td ng-bind='item.salary'></td><td ng-bind='item.exp'></td><td ng-bind='item.allure'></td><td><a href='ng-bind='item.src''>查看</a></td></tr></tbody>",
// 		link: function(scope) {
// 			console.log('testlink')
// 		}
// 	};
// })
// demoApp.filter('to_trusted', ['$sce',
// 		function($sce) {
// 			console.log('!!!')
// 			return function(text) {
// 				return $sce.trustAsHtml(text);
// 			}
// 		}]
// 	)