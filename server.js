const express = require("express");
const routerHome = require("./routes/homeRoute");
const expressEjsLayouts = require("express-ejs-layouts");
const port = 5000
const server = express();
//EJS configs
server.set("view engine", "ejs");

//Config para o css
server.use(express.static('public'))

//Config layout
server.set("layout", "./layout.ejs");
server.use(expressEjsLayouts);

//Config requisicoes post
server.use(express.urlencoded({ extended: true }));

server.use("/", routerHome);

server.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
