
var app = angular.module('ABMangularPHP', []);


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});


app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";

//inicio las variables
  $scope.usuario={};
  $scope.usuario.nombre= "natalia" ;
 $scope.usuario.dni= "12312312" ;
  $scope.usuario.apellido= "natalia" ;
  $scope.usuario.foto="sinfoto";


  $scope.Guardar=function(){


  	console.log("usuario a guardar:");
    console.log($scope.usuario);
     

 }
});


app.controller('controlGrilla', function($scope, $http) {
  	$scope.DatoTest="**grilla**";
 	
 
 	$scope.Borrar=function(persona){
		console.log("borrar"+persona);


 	}




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});
