var groupIndex=angular.module("groupIndex",[]);
//创建banner模块
groupIndex.directive("banner",function(){
	return {
		restrict:"EA",
		templateUrl:"html/banner.html",
		replace:"true",
		link: function() {
			setTimeout(function() {
				$('#owl-demo').owlCarousel({//轮播图的的执行函数
					items: 1,
					navigation: false, // Show next and prev buttons
					slideSpeed: 300,
					paginationSpeed: 400,
					singleItem: true,
					lazyLoad: true
				});
			}, 100)
		}
	}
})
//创建menu模块
groupIndex.directive("menu",function(){
	return {
		restrict:"EA",
		templateUrl:"html/menu.html",
		replace:"true",
	}
})
//创建hot-news模块
groupIndex.directive("hotnews",function(){
	return {
		restrict:"EA",
		templateUrl:"html/hot-news.html",
		replace:"true",
	}
})
//banner模块的数据控制模块
groupIndex.controller("bannerCtrl",function($scope,dataService){
	dataService.then(function(res){
		$scope.banners=res.data.banner;
	});
})
//menu模块的N数据控制模块
groupIndex.controller("menuCtrl",function($scope,dataService){
	dataService.then(function(res){
		$scope.menus=res.data.menu;
	});
})
//hot-news模块的数据控制模块
groupIndex.controller("hotnewsCtrl",function($scope,dataService){
	dataService.then(function(res){
		$scope.hotnews=res.data.hotnews;
		console.log($scope.banners);
	});
})
//hot-newsdetails模块的数据交互
groupIndex.controller("hotnewsDetailsCtrl",function($scope,$routeParams,dataService){
	dataService.then(function(res){
		
		angular.forEach(res.data.hotnews,function(data,index,array){
			if(data.id==$routeParams.id){//$routeParams位angularJs自身的一个属性，代表当前点击的那一项
				$scope.newsdetail=data;//当前点击的项的数据，不需要再在html中循环
			}
		})
	})
})
//创建轮播图的点击跳转模块
groupIndex.controller("bannerDetailsCtrl",function($scope,$routeParams,dataService){
	dataService.then(function(res){
		angular.forEach(res.data.banner,function(data,index,array){
			if(data.id==$routeParams.id){//$routeParams位angularJs自身的一个属性，代表当前点击的那一项
				$scope.detail=data;//当前点击的项的数据，不需要再在html中循环
			}
		})
	})
})
/***
 * memu部分的各个模块的页面控制 start
 * */
//医院动态模块
groupIndex.controller("DynamicCtrl",function($scope,dataService){
	dataService.then(function(res){
		$scope.Dynamics=res.data.hospitalDynamic;
		console.log($scope.Dynamics);
	});
})
groupIndex.controller("DynamicDetalCtrl",function($scope,$routeParams,dataService){
	dataService.then(function(res){
		angular.forEach(res.data.hospitalDynamic,function(data,index,array){
			if(data.id==$routeParams.id){//$routeParams位angularJs自身的一个属性，代表当前点击的那一项
				$scope.detail=data;//当前点击的项的数据，不需要再在html中循环
			}
		})
	})
})

/** memu部分的各个模块的页面控制 end*/
//因为一个页面只能有一个队数据的跨域请求，所以将数据共有化，让所有的模块都可以调用这部分的公共数据
groupIndex.service("dataService",function($http){
	return $http.get("json/data.json").success(function(res){
		return res;
	});
})
