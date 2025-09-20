const PerfilModel = require("../models/perfilModel");
const usuarioModel = require("../models/usuarioModel");

class UsuarioController {
  async listarView(req, res) {
    let usuario = new usuarioModel();
    let lista = await usuario.listar();

    res.render("usuario/listar", { usuarios: lista });
  }

  async atualizarView(req, res) {
    // esse id vem do href da tela de exibir -> <a href="/usuario/atualizar/<%=usuarios[i].usuarioID%>
    // isso quer dizer que ele vai te mandar para tela de atualizar e passando o id do usuario clicado como parametro da req
    // antes de renderizar a tela de atualizar vamos buscar esse id no banco e retornar o dado estruturado desse usuario
    
    let idUsuario = req.params.id; // atribuimos a variavel o id do usuario que veio do parametro

    let usuModel = new usuarioModel();

    let usuEncontrado = await usuModel.buscarID(idUsuario);//Procuramos o id do usuario que veio do parametro 



    let perfilModel = new PerfilModel();

    let lista = await perfilModel.listar();
    //Renderiza o usuario encontrado e a lista de perfil
    res.render("usuario/atualizar", { lista: lista, usuario: usuEncontrado });

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
    //console.log(req.body.name);
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

  async atualizar(req, res){
    //console.log(req.body);
    let id = req.body.id; // recebe o id do fetch
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let perfil = req.body.perfil;
    let ativo = req.body.ativo;

    if(id && nome && email && senha && perfil && ativo){
      let usuModel = new usuarioModel();

      if(id){
        let novoUsu = new usuarioModel(id, nome, senha, email, ativo, perfil, " ");
        if( await usuModel.atualizar(novoUsu)){
          res.send({ok: true, msg: "Usuario atualizado"})
        }else{
          res.send({ok: false, msg: "Falha ao atualizar o usuario"});
        }
      }else{
        res.send({ok: false, msg: "Usuario nao encontrado"});
      }
    }else{
      res.send({ok: false, msg: "Usuario nao pode ser atualizado com dados invalidos."});
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
