const usuarioModel = require("../models/usuarioModel");

class UsuarioController{
    listarView(req, res){
        res.render("usuario/listar")
    }

    cadastrarView(req, res){
        //Esses parametros serao recebidos pelo construtor
        let teste = new usuarioModel(0, 'mazzega', 123, 'mazzega@gmail.com', 's', 1);
        res.render("usuario/cadastrar");
    }
}

module.exports = new UsuarioController();