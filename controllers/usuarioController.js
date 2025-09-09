const usuarioModel = require("../models/usuarioModel");

class UsuarioController {
  async listarView(req, res) {
    let usuario = new usuarioModel();
    let lista = await usuario.listar();

    res.render("usuario/listar", { usuarios: lista });
  }

  cadastrarView(req, res) {
    res.render("usuario/cadastrar");
  }

  async cadastrar(req, res) {
    //Ler e validar os dados do body e criar uma model com esses dados para persistir no banco
    let nome = req.body.nome;
    let senha = req.body.senha;
    let email = req.body.email;
    let ativo = req.body.ativo;
    let perfil = req.body.perfil;
    if (nome && senha && email && ativo) {
      let usuario = new usuarioModel(0, nome, senha, email, ativo, perfil);
      if (await usuario.cadastrar()) {
            res.send({ok: true, msg: "Usuario cadastrado"});
      } else {
        res.send({
          ok: false,
          msg: "Nao foi possivel cadastrar o usuario no banco.",
        });
      }
    } else {
      res.send({ ok: false, msg: "O usuario nao pode conter dados invalidos" });
    }
  }
}

module.exports = new UsuarioController();
