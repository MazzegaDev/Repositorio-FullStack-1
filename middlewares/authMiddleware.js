const UsuarioModel = require("../models/usuarioModel");


class AuthMiddleware {

    async validar(req, res, next) {
        //Recupera o id do usuario que veio como resposta pela cookie
        let usuarioId = req.cookies.usuarioLogado;// req <- cookie <- usuarioLogado (id)
        if(usuarioId) {
            let usuario = new UsuarioModel();
            usuario = await usuario.buscarPorId(usuarioId);
            if(usuario != null && usuario.usuarioAtivo == 1) {
                //Definimos o obj do usuario dentro da locals para podemos reaproveitar o obj
                res.locals.usuario = usuario;
                next();
            }
            else {
                res.redirect("/login");
            }
            
        }
        else {
            res.redirect("/login");
        }
    }
}

module.exports = AuthMiddleware;