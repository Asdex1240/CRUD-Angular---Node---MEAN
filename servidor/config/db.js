const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () =>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.DB_MONGO, {
            
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Conectada');

    }catch (error){
        console.log(error)
        process.exit(1); //Detener la app
    }
}

module.exports = conectarDB;