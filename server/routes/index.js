var express = require('express');
var router = express.Router();
//Obtiene el modelo o coleccion de mongodb 'producto'
var modelProducto = require('../models/Producto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/*Estas rutas solo son para las probar los métodos que acceden a la base de datos
Hay que separarlas, y conectarlas con los controladores*/

//Crea la ruta http://localhost:3000/findAll y muestra todos los productos de la base de datos en un archivo.json
router.get('/findAll',function(req,res,next){
      modelProducto.find(function(err,productos){

              if(err)
                console.log('ERROR');
              else
                res.send(productos);

         });
});


//Crea la ruta http://localhost:3000/findOne/'nombre del producto que se busca' y muestra el producto
router.get('/findOne/:nombre',function(req,res,next){

      modelProducto.findOne(req.params.nombre,function(err,productoFound){
               if(err)
                console.log('ERROR');
              else
                res.send(productoFound);

          });
});


//Esto es una prueba para poder hacer el test de los metodos de búsqueda. No lo borremos por el ahora
router.post('/guardar',function(req,res,next){
   var producto = new modelProducto({
       nombre: req.body.nombre,
       precio: req.body.precio,
       imagen: req.body.imagen
  });

   producto.save(function(err,data){
   	   if(err)
   	   	console.log('Error de inserccion');
   	   else
   	   	console.log('Exito');
   });

});

module.exports = router;
