const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    producto: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    fechaCracion: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Producto', ProductoSchema);