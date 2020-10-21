const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const url = "mongodb+srv://usuario_adm:usuario_adm123@clusterloja.dqhrp.mongodb.net/test?retryWrites=true&w=majority";
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com banco: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco');
});

//BODY PARSER
// PRECISA PRA QUANDO ENVIA DADOS NO POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const indexRoute = require('./Routes/index');
const productsRoute = require('./Routes/products');

app.use('/', indexRoute);
app.use('/products', productsRoute);

app.listen(3000);

module.exports.app;
