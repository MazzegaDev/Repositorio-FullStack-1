
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

}

module.exports = usuarioModel;