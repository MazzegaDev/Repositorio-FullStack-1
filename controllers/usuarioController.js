class UsuarioController{
    listarView(req, res){
        res.render("usuario/listar")
    }

    cadastrarView(req, res){
        res.render("usuario/cadastrar")
    }
}

module.exports = new UsuarioController();