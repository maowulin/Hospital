var Departmentdoctor=angular.module("Departmentdoctor",[]);
Departmentdoctor.controller("DepartmentdoctorCtrl",function($scope,DepartmentSevice){
	DepartmentSevice.then(function(res){
		$scope.departmentdoctors=res.departmentdoctors;
		$scope.doctors=res.doctors;
		$scope.nurses=res.nurses;
		$(".choose_head span").click(function(){
			$(this).addClass("curr").siblings().removeClass("curr");
			$("ul.choose_content").eq($(this).index()).addClass("show").siblings("ul").removeClass("show");
		})
	})
})
//departmentdoctorDetail
Departmentdoctor.controller("DeDoctordetailCtrl",function($scope,$routeParams,DepartmentSevice){
	DepartmentSevice.then(function(res){
		$scope.DeDoctors=res.departmentdoctors;//科室信息的获取
		angular.forEach($scope.DeDoctors,function(data,index,array){
			if(data.id==$routeParams.id){
				$scope.DedoctorNow=data;
				$scope.keshiName=data.name;
			}
		})
		$scope.showMore=function(){
			if($(".departmentDetail p").hasClass("showmore")){
				$(".departmentDetail p").removeClass("showmore");
				$("a.more").html("查看更多");
			}else{
				$(".departmentDetail p").addClass("showmore");
				$("a.more").html("收起");
			}	
		}
		
		console.log($scope.keshiName);
		$scope.doctors=res.doctors;
		$scope.arrSdocs=[];//创建一个空数组，用于存放当前科室的医生
		angular.forEach($scope.doctors,function(data,index,array){
			if($scope.keshiName==data.keshe){
				$scope.arrSdocs.push(data);
			}
		})
	})
})
Departmentdoctor.controller("doctors",function($scope,$routeParams,DepartmentSevice){
	DepartmentSevice.then(function(res){
		$scope.doctors=res.doctors;
		angular.forEach($scope.doctors,function(data,index,array){
			if(data.id==$routeParams.id){
				$scope.doctorNow=data;
			}
		})
	})
})
Departmentdoctor.service("DepartmentSevice",function($http){
	return $http.get("json/Department_doctor.json").then(function(res){
		return res.data;
	})
})
