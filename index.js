const express = require('express');
const routes = require('./app/controllers/routes.js');

const app = express();   //creating the server
app.use(express.json()); //config for json acquisition .

const PORT = 3000;
app.use('/banco',routes); //define initial path -- complete path will be http://localhost/3000/banco

app.listen(PORT, () => {
    console.log('Escuchando por el puerto:', PORT);
});