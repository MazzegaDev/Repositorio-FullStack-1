const Database = require("../utils/ClassDB");

//Clase que representa a tabela de usuarios no banco e se comunicar com o banco para executar comandos SQL
class usuarioModel{

    #usuarioID;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;
    #usuarioAtivo;
    #perfilId;

    get usuarioID(){
        return this.#usuarioID;
    }

    set usuarioID(id){
        this.#usuarioID = id;
    }

    get usuarioNome(){
        return this.#usuarioNome;
    }

    set usuarioNome(nome){
        this.#usuarioNome = nome;
    }

    get usuarioEmail(){
        return this.#usuarioEmail;
    }

    set usuarioEmail(email){
        this.#usuarioEmail = email;
    }

    get usuarioSenha(){
        return this.#usuarioSenha;
    }

    set usuarioSenha(senha){
        this.#usuarioSenha = senha;
    }

    get usuarioAtivo(){
        return this.#usuarioAtivo;
    }

    set usuarioAtivo(ativo){
        this.#usuarioAtivo = ativo
    }

    get perfilId(){
        return this.#perfilId;
    }

    set perfilId(id){
        this.#perfilId = id;
    }
    
    #db;

    constructor(id, nome, senha, email, ativo, perfilId){
        //é chamado no momento de uma instancia de classe
        this.#usuarioID = id;
        this.#usuarioNome = nome;
        this.#usuarioEmail = email;
        this.#usuarioSenha = senha;
        this.#usuarioAtivo = ativo;
        this.#perfilId = perfilId;
        this.#db = new Database();

    }

    async listar(){
        const sql = "select * from TB_Usuarios";
        //Espere o banco executar a requisição e assim resolver a promisse 
        const rows = await this.#db.ExecutaComando(sql);

        let listaUsers = [];
        for(let i=0; i<rows.length; i++){
            let row = rows[i];
            //Instanciamos a model no usuario
            let usuario = new usuarioModel();
            //Utilizamos seus seters pois nao iremos preencher todos seus atributos
            usuario.usuarioID = row["usu_id"];
            usuario.usuarioNome = row["usu_nome"];
            usuario.usuarioEmail = row["usu_email"];
            usuario.usuarioAtivo = row["usu_ativo"];

            listaUsers.push(usuario)

            
        }
    }
}

module.exports = usuarioModel;