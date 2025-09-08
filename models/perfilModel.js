const DataBase = require("../utils/ClassDB")

class PerfilModel{

    #perfilId;
    #perfilDescricao;

    get perfilId(){
        return this.#perfilId;
    }

    set perfilId(id){
        this.#perfilId = id;
    }

    get perfilDescricao(){
        return this.#perfilDescricao;
    }

    set perfilDescricao(desc){
        this.#perfilDescricao = desc;
    }

    #db;
    constructor(perfilId, perfilDescricao){
        this.#db = new DataBase();
        this.#perfilId = perfilId;
        this.#perfilDescricao = perfilDescricao;
    }

    async listar(){
        const sql = "select * from TB_Perfil";
        const rows = await this.#db.ExecutaComando(sql);
        let lista = [];
        
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            lista.push(
                new PerfilModel(
                    row["per_id"],
                    row["per_desc"]
                )
            )        
        }

        return lista;
    }

}

module.exports = PerfilModel;