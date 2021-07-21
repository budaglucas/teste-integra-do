const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/teste-integra', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(err) {
    if(err) {
        console.log(err)
    } else { 
        console.log('MongoDB conectado com sucesso!')
    }
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose conectado');
})

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(PORT, function() {
    console.log(`Server rodando na port ${PORT}`)
})