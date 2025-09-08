const PerfilModel = require("../models/perfilModel");
const usuarioModel = require("../models/usuarioModel");

class UsuarioController{

    async listarView(req, res){
        let usuario = new usuarioModel();
        let lista = await usuario.listar();

        res.render("usuario/listar", {usuarios: lista});
    }

    async cadastrarView(req, res){
        //Instancia a perfil model na usuarioController pois vamos precissar listar os perfeis no form de cadastro
        let perfil = new PerfilModel();

        //Executamos o select da perfil model para recuperar os perfis
        let lista = await perfil.listar();

        //Enviamos a lista para o formulario -> usuario/cadastrar
        res.render("usuario/cadastrar", {lista: lista});
    }
    
    async cadastrar(req, res){
        //Ler e validar os dados do body e criar uma model com esses dados para persistir no banco
    }
}

module.exports = new UsuarioController();