const Database = require("../utils/ClassDB");

//Clase que representa a tabela de usuarios no banco e se comunicar com o banco para executar comandos SQL
class usuarioModel {
  #usuarioID;
  #usuarioNome;
  #usuarioEmail;
  #usuarioSenha;
  #usuarioAtivo;
  #perfilId;
  #perfilDesc;
  #db;

  get perfilDesc(){
    return this.#perfilDesc
  }
  set perfilDesc(desc){
    this.#perfilDesc = desc;
  }

  get usuarioID() {
    return this.#usuarioID;
  }
  set usuarioID(id) {
    this.#usuarioID = id;
  }

  get usuarioNome() {
    return this.#usuarioNome;
  }
  set usuarioNome(nome) {
    this.#usuarioNome = nome;
  }

  get usuarioEmail() {
    return this.#usuarioEmail;
  }
  set usuarioEmail(email) {
    this.#usuarioEmail = email;
  }

  get usuarioSenha() {
    return this.#usuarioSenha;
  }
  set usuarioSenha(senha) {
    this.#usuarioSenha = senha;
  }

  get usuarioAtivo() {
    return this.#usuarioAtivo;
  }
  set usuarioAtivo(ativo) {
    this.#usuarioAtivo = ativo;
  }

  get perfilId() {
    return this.#perfilId;
  }
  set perfilId(id) {
    this.#perfilId = id;
  }

  constructor(id, nome, senha, email, ativo, perfilId, desc) {
    //é chamado no momento de uma instancia de classe
    this.#usuarioID = id;
    this.#usuarioNome = nome;
    this.#usuarioEmail = email;
    this.#usuarioSenha = senha;
    this.#usuarioAtivo = ativo;
    this.#perfilId = perfilId;
    this.#perfilDesc = desc;
    this.#db = new Database();
  }

  async listar() {
    const sql = "select * from TB_Usuarios U inner join TB_Perfil P on U.per_id = P.per_id";
    //Espere o banco executar a requisição e assim resolver a promisse
    const rows = await this.#db.ExecutaComando(sql);

    let listaUsers = [];
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      //Instanciamos a model no usuario
      let usuario = new usuarioModel();
      //Utilizamos seus seters pois nao iremos preencher todos seus atributos
      usuario.usuarioID = row["usu_id"];
      usuario.usuarioNome = row["usu_nome"];
      usuario.usuarioEmail = row["usu_email"];
      if(row["usu_ativo"]){
        usuario.usuarioAtivo = "Sim"
      }else{
        usuario.usuarioAtivo = "nao"
      }

      usuario.perfilDesc = row["per_descricao"];

      listaUsers.push(usuario);
    }

    return listaUsers;
  }

  async cadastrar() {
    const sql =
      "insert into TB_Usuarios (usu_nome, usu_email, usu_ativo, usu_senha, per_id) values (?, ?, ?, ?, ?)";

    const values = [
      this.#usuarioNome,
      this.#usuarioEmail,
      this.#usuarioAtivo,
      this.#usuarioSenha,
      this.#perfilId,
    ];

    const result = await this.#db.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async excluir(id) {
    const sql = "delete from TB_Usuarios where usu_id = ?";
    const values = [id];

    const result = await this.#db.ExecutaComandoNonQuery(sql, values);

    return result;
  }

  async buscarID(id) {
    const sql = "select * from TB_Usuarios where usu_id = ?";
    const values = [id];

    const rows = await this.#db.ExecutaComando(sql, values);

    if (rows.length > 0) {
      let row = rows[0];
      let usuario = new usuarioModel(
        row["usu_id"],
        row["usu_nome"],
        row["usu_email"],
        row["usu_senha"],
        row["usu_ativo"],
        row["per_id"]
      );
      return usuario;
    }
    return null;
  }

  async atualizar(novoUsuario) {
    const sql = "update TB_Usuarios set usu_nome = ?, usu_email = ?, usu_senha = ?, usu_ativo = ? where usu_id = ?";

    const values = [novoUsuario.usuarioNome, novoUsuario.usuarioEmail, novoUsuario.usuarioSenha, novoUsuario.ativo, novoUsuario.usuarioID];

    const result = await this.#db.ExecutaComandoNonQuery(sql, values);

    return result;
    
  }
}

module.exports = usuarioModel;
