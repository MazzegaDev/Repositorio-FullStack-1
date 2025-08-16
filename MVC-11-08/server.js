const express = require("express");
const server = express();
const homeRouter = require("./Routes/homeRoute");
const PORT = 5000
server.use(express.urlencoded({extended: true})) // Permite que trabalhamos com input

server.set('view engine', 'ejs')
server.use('/', homeRouter);


server.listen(PORT, () => {
  console.log("Server is running on http://localhost:5000");
});
