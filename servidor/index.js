const express = require('express');
const conectarDB = require('./config/db');


//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

//Definimos la ruta principal
app.get('/', (req, res) =>{
    res.send('Hola Mundo');
})



app.listen(4000, () =>{
    console.log('El servidor esta funcionando');
})