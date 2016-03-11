var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
	nombre: String,
	precio: Number,
	imagen: String
});

var Producto = mongoose.model('producto', productoSchema);
mongoose.connect('mongodb://localhost:27017/dbCarrito',function(){
	if(err)
		console.log('ERROR conectando a la base de datos');
	else
		console.log('Conexion establecida correctamente');
});

module.exports = Producto;