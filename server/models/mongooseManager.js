   

    
    //Obtiene la coleccion 'producto' de la base de datos
    var modelProducto = require('../models/Producto');

    module.exports.findAllProducts = function(req,res){

         modelProducto.find(function(err,productos){
             
              if(err)
                console.log('ERROR');
              else
                res.send(productos);
              
         });
    };

   module.exports.findByName = function(req,res){
          modelProducto.findOne({nombre: req.params.nombre},function(err,productoFound){       
               if(err)
                console.log('ERROR');
              else
                res.send(productoFound);
           
          });        
   };
   
   




