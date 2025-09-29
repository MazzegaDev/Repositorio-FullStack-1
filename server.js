const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const cookieParser = require("cookie-parser");
const routerHome = require("./routes/homeRoute");
const rotaLogin = require('./routes/rotaLogin');
const routerUsuario = require("./routes/usuarioRoute");
const server = express();

//configurações do EJS
server.set("view engine", 'ejs')

//Expor a pasta de estilização/script para o navegador
server.use(express.static('public'));

//Configuração arquivo de Layout
server.set('layout', './layout.ejs');
server.use(expressEjsLayouts);
server.use(cookieParser());

//Configuração para as requisições POST (Submissão)
server.use(express.urlencoded({extended: true}));
//Configurar a possibilidade de fazer parse em uma string JSON
server.use(express.json());


server.use("/", routerHome);
server.use("/login", rotaLogin);
server.use("/usuario", routerUsuario);

server.listen(5000, function() {
    console.log("servidor web em funcionamento!");
})
