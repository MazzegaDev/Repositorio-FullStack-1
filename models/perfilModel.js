const Database = require("../utils/database");


class PerfilModel {

    #perfilId;
    #perfilDescricao;

    get perfilId() {
        return this.#perfilId;
    }

    set perfilId(value) {
        this.#perfilId = value;
    }

    get perfilDescricao(){
        return this.#perfilDescricao;
    }

    set perfilDescricao(value) {
        this.#perfilDescricao = value;
    }

    constructor(id, descricao) {
        this.#perfilId = id;
        this.#perfilDescricao = descricao;
    }

    async listar() {
        const sql = "SELECT * FROM TB_PERFIL";

        const banco = new Database();
        const rows = await banco.ExecutaComando(sql);
        let lista = [];

        for(let i = 0; i < rows.length; i++) {
            lista.push(new PerfilModel(rows[i]["PER_ID"], rows[i]["PER_DESCRICAO"]))
        }

        return lista;
    }
}

module.exports = PerfilModel;