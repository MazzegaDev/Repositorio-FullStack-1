const PerfilModel = require("../models/perfilModel");
const usuarioModel = require("../models/usuarioModel");

class UsuarioController {
  async listarView(req, res) {
    let usuario = new usuarioModel();
    let lista = await usuario.listar();

    res.render("usuario/listar", { usuarios: lista });
  }

  async atualizarView(req, res) {

    let idUsuario = req.params.id;

    let usuModel = new usuarioModel();

    let usuID = await usuModel.buscarID(idUsuario);



    let perfilModel = new PerfilModel();

    let lista = await perfilModel.listar();

    res.render("usuario/atualizar", { lista: lista, usuario: usuID });

  }
  //Renderiza o formulario de cadastro
  async cadastrarView(req, res) {
    //Instancia a perfil model na usuarioController pois vamos precissar listar os perfeis no form de cadastro
    let perfil = new PerfilModel();

    //Executamos o select da perfil model para recuperar os perfis
    let lista = await perfil.listar();

    //Enviamos a lista para o formulario -> usuario/cadastrar
    res.render("usuario/cadastrar", { lista: lista });
  }

  async cadastrar(req, res) {
    //Ler e validar os dados do body e criar uma model com esses dados para persistir no banco
    console.log(req.body.name);
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let perfil = req.body.perfil;
    let ativo = req.body.ativo;

    if (nome && email && senha && perfil && ativo) {
      let usuario = new usuarioModel(0, nome, senha, email, ativo, perfil);
      if (await usuario.cadastrar()) {
        res.send({ ok: true, msg: "OK" });
      }
    } else {
      res.send({ ok: false, msg: "Dados invalidos" });
    }
  }

  async excluir(req, res) {
    let ok;
    let msg;
    let id = req.body.id;
    if (id) {
      let usuario = new usuarioModel();
      if (await usuario.excluir(id)) {
        ok = true;
        msg = "Excluido";
      } else {
        msg = "Erro ao excluir";
      }
    } else {
      ok = false;
      msg = "ID nao encontrado";
    }

    res.send({ ok: ok, msg: msg });
  }
}

module.exports = new UsuarioController();
