var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
	codigo: Number,
	nombre: String,
	precio: Number,
	imagen: String,
	descripcion: String
});

var productoModel = mongoose.model('producto', productoSchema);
//nombre de la db 
mongoose.connect('mongodb://localhost/db_productos', function(err,res){

  if(err)
    console.log('ERROR conectando a la base de datos ' + err);
  else
    console.log('Conexion establecida correctamente');

});

module.exports = productoModel;
