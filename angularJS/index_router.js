var app=angular.module("app",[
	"ngRoute",
	"groupIndex",
	"Departmentdoctor"
]);
app.config(function($routeProvider){
	$routeProvider
	.when('/index',		       {templateUrl      : 'html/webapp.html'})
	.when('/bannerDetail/:id', {templateUrl      : 'html/bannerDetail.html'})
	.when('/intro',			   {templateUrl      : 'html/menugroup/hospitalIntr.html'})
	.when('/dynamic',		   {templateUrl      : 'html/menugroup/hospitalDynamic.html'})
	.when('/HDynamicDetails/:id',{templateUrl    : 'html/menugroup/menu_son/HDynamicDetails.html'})
	.when('/hot-newsDetails/:id',{templateUrl    : 'html/hot-newsDetails.html'})
	.when('/departmentdoctor',	{templateUrl     : 'html/menugroup/Department_doctor.html',
								 controller      :'DepartmentdoctorCtrl'})
	.when('/departmentdoctorDetail/:id',{templateUrl :'html/menugroup/menu_son/departmentdoctorDetail.html',
										 controller  :'DeDoctordetailCtrl'
										})
	.when('/doctors/:id',{templateUrl :'html/menugroup/menu_son/doctors.html',
						  controller  :'doctors'})
	.otherwise({redirectTo:'/index'});
});
