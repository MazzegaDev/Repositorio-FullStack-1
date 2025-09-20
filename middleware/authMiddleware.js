const usuarioModel = require("../models/usuarioModel");

class AuthMiddleware{
    async validar(req, res, next){
        console.log("passei pelo middlaware");
        let usuarioId = req.cookies.usuarioLogado;
        if(usuarioId){
            let usuarioM = new usuarioModel;
            usu = await usuarioM.buscarID(usuarioId);
            if(usu != null && usu.usuarioAtivo == 1){
                next();
            }else{
                res.redirect("/login")
            }
        }
       
    }
}

module.exports = AuthMiddleware;