const PerfilModel = require("../models/perfilModel");
const UsuarioModel = require("../models/usuarioModel");

class UsuarioController {

    async listarView(req, res) {
        console.log(req);
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        res.render('usuario/listar', {usuarios: lista});
    }
    
    async cadastrarView(req, res) {
        let perfil = new PerfilModel();
        let lista = await perfil.listar();
        res.render("usuario/cadastrar", {lista: lista});
    }

    async alterarView(req, res) {
        let idUsuario = req.params.id;
        let usuario = new UsuarioModel();
        usuario = await usuario.buscarPorId(idUsuario);
        let perfil = new PerfilModel();
        let lista = await perfil.listar();
        res.render("usuario/alterar", {lista: lista, usuario: usuario});
    }

    async cadastrar(req, res) {
        console.log(req.body);
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let ativo = req.body.ativo;
        let perfil = req.body.perfil;
        if(nome && email && senha && perfil) {           
            //dados validados, vamos prosseguir com o cadastro
            //modelo preenchida com os dados que serão utilizados la dentro
            let usuario = new UsuarioModel(0, nome, email, senha, ativo, perfil);
            
            let resultado = await usuario.cadastrar();
            if(resultado) {
                //devolver o resultado positivo
                res.send({ok: true, msg: "Usuário cadastrado com sucesso!"});
            }
            else {
                //devolver o resultado negativo (erro na inserção)
                res.send({ok: false, msg: "Erro ao inserir usuário no banco de dados"});
            }
        }
        else {
            //retorno negativo, existem dados faltando do usuario
            res.send({ok: false, msg: "Faltam informações para inserir o usuário!"});
        }
    }

    async alterar(req, res) {
        let id = req.body.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let ativo = req.body.ativo;
        let perfil = req.body.perfil;
        if(id && nome && email && senha && perfil) {           
            //dados validados, vamos prosseguir com o cadastro
            //modelo preenchida com os dados que serão utilizados la dentro
            let usuario = new UsuarioModel(id, nome, email, senha, ativo, perfil);
            
            let resultado = await usuario.alterar();
            if(resultado) {
                //devolver o resultado positivo
                res.send({ok: true, msg: "Usuário alterado com sucesso!"});
            }
            else {
                //devolver o resultado negativo (erro na inserção)
                res.send({ok: false, msg: "Erro ao alterar usuário no banco de dados"});
            }
        }
        else {
            //retorno negativo, existem dados faltando do usuario
            res.send({ok: false, msg: "Faltam informações para alterar o usuário!"});
        }
    }

    async excluir(req, res) {
        let ok;
        let msg;

        let id = req.body.id
        if(id) {
            let usuario = new UsuarioModel();
            const result = await usuario.excluir(id);
            if(result) {
                ok = true;
                msg = "Usuário excluído com sucesso!";
            }
            else {
                ok = false;
                msg = "Erro ao excluir o usuário do banco!";
            }
        }
        else {
            ok = false;
            msg = "ID não encontrado para exclusão!";
        }

        res.send({ok: ok, msg: msg});
    }
}

module.exports = UsuarioController;