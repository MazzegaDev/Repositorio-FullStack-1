const PerfilModel = require("../models/perfilModel");
const UsuarioModel = require("../models/usuarioModel");

class LoginController{

    loginView(req, res){
        let perfil = new PerfilModel();
        perfil.id = 20;
        perfil.descricao = "Administrador";
        console.log(perfil.id);
        console.log(perfil.descricao);
        res.render('login.ejs', {layout: false});
    }

    async login(req,res){
        //post
        const usuario = req.body.usuario;
        const senha = req.body.senha;
        let msg = "Usuário ou senha inválidos";
        let cor = "red";
        let usuarioModel = new UsuarioModel();
        usuarioModel = await usuarioModel.validar(usuario, senha);
        if (usuarioModel){
            //Enviamos a cookie com o id do usuario como resposta para o navegador 
            res.cookie("usuarioLogado", usuarioModel.usuarioId);
            return res.redirect("/");
        }

        return res.render('login.ejs', {'mensagem':msg, 'color':cor, layout: false});
    }
}

module.exports = LoginController;