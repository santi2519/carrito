module.exports = function(app){


   var producto = require('./models/Producto');

   findAllProducts = function(req,res){

   	     producto.find(function(err,products){
             
              if(err)
              	console.log('ERROR');
              else
              	res.send(products);
              
   	     });

   findOneProduct = function(req,res){
   	     	producto.findOne(req.params.nombre,function(err,productoFound){
               
               if(err)
              	console.log('ERROR');
              else
              	res.send(products);
           
   	     	}); 	     
   	     }
   
   app.get('./findAllProducts',findAllProducts);
   app.get('./findOneProduct',findOneProduct);

}



