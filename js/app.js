// en la siguiente linea crearemos una variable de tipo aplicacion de angular llamada angularFirebase

var app = angular.module('ABMangularPHP', []);


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});


app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta usuario**";

//inicio las variables
  $scope.usuario={};
  $scope.usuario.nombre= "natalia" ;
 $scope.usuario.dni= "12312312" ;
  $scope.usuario.apellido= "orlievsky" ;
  $scope.usuario.foto="sinfoto";
 $scope.mascota={};
 $scope.mascota.fechadenacimiento="24/08/2016";
 $scope.mascota.sobrenombre="Pupi";
 $scope.mascota.raza="Bull Terrier";

  $scope.Guardar=function(){
   
   var messagesRef = new Firebase('https://altausuario-4a7b0.firebaseio.com/');

  	console.log("usuario a guardar:");
    console.log($scope.usuario);
     
messagesRef.push($scope.usuario);
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
