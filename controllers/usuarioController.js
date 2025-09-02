const usuarioModel = require("../models/usuarioModel");

class UsuarioController{

    async listarView(req, res){
        let usuario = new usuarioModel();
        let lista = await usuario.listar();

        res.render("usuario/listar", {usuarios: lista});
    }

    cadastrarView(req, res){
        res.render("usuario/cadastrar");
    }
    
    async cadastrar(req, res){
        //Ler e validar os dados do body e criar uma model com esses dados para persistir no banco
    }
}

module.exports = new UsuarioController();