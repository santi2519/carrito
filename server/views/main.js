//modulo que será el que defina toda nuestra aplicación el mainapp
var app=angular.module("MainApp", []);

//LA VARIABLE ESCOPE ES LO QUE MANEJA TODOS LOS ATRIBUTOS DEL CONTROLLADOR,recordar que angularjs son directivas,modulos y controladores....
//esto es lo que vah a llamar las rutas del js, es decir es lo que unje angularjs con el apires(nodjs,express)...


app.controller("mainController",function ($scope, $http) {
	$scope.newproducto = [];
	$scope.productos = [
	{codigo: 1,nombre: "dasfafasd", "imagen":"productos/nike.jpg",precio:3000,descripcion:"talla40  aDASDASDFFASFASDASD"},
    {codigo: 2,nombre: "fdfsdfd", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 3,nombre: "ahgfhf", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 4,nombre: "Hytryrt", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 5,nombre: "ffgs", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 6,nombre: "xfsdf", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 7,nombre: "cfsd", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 8,nombre: "berw", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 9,nombre: "dfsd", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 10,nombre: "efsdf", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"},
    {codigo: 11,nombre: "ssdfds", "imagen":"productos/.jpg",precio:3000,descripcion:"talla40"}

	];






  // Obtenemos todos los datos de la base de datos
   // Cuando se cargue la página, pide del API
/*  	$http.get('/api/producto').success(function(data) {
  		$scope.productos = data;
  	})
  	.error(function(data) {
  		console.log('Error: ' + data);
  	});*/


  	$scope.ordenarPor=function(orden){
  		$scope.ordenSeleccionado=orden;
  	};




// Función para coger el objeto seleccionado en la tabla
	$scope.selectProducto = function(producto) {
$scope.newproducto.push(producto);
       if(!this.verificar(producto)){
        producto.cantidad = 1;
       $scope.newproducto.push(producto);
   }
  };

	$scope.agregarCantidad =function(producto){
		var i;
       for(i=0,len = newproducto.length; i <= len;i++){
            if(newproducto[i].codigo===producto.codigo){
              newproducto[i].cantidad=$scope.nuevacantidad;
              $scope.nuevacantidad="";
              newproducto[i].precio=parseInt($scope.nuevacantidad*newproducto[i].precio);
            }
        }

	};


  $scope.verificar=function(producto){
      var i;
      var len= newproducto.length;
       for(i=0; i <= len;i++){
            if(newproducto[i].codigo===producto.codigo){
              return true ;
            }
        }
        return false;
  };






});
