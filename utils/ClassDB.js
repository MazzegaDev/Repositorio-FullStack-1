const mysql = require('mysql2')

class Database {

    #conexao;

    get conexao() { return this.#conexao;} set conexao(conexao) { this.#conexao = conexao; }

    constructor() {
        //Cria uma nova coneção
        this.#conexao = mysql.createPool({
            host: '132.226.245.178', //endereço do nosso banco de dados na nuvem
            database: 'PFS1_10442415870', //a database de cada um de vocês possui a nomenclatura PFS2_(RA)
            user: '10442415870', // usuario e senha de cada um de vocês é o RA
            password: '10442415870',
            idleTimeout: 30000,
            connectionLimit: 50
        });
    }
	//Select -> comandos com querys
    ExecutaComando(sql, valores) {
        var cnn = this.#conexao; //Instancia coneção
        return new Promise(function(res, rej) { // Promises sao nescessarias para operar DB
            //Query executa o mysql passando nosso comando sql, seus valores
            cnn.query(sql, valores, function (error, results, fields) { //essa function callback retorna se o comando query teve uma rejeição ou um resultado
                if (error) 
                    rej(error);
                else 
                    res(results); // retorna nossa query
            });
        })
    }
    //Insert update delete -> comandos sem queryes
    ExecutaComandoNonQuery(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.affectedRows > 0); //So quero saber se funcinou ou nao
            });
        })
    }

    ExecutaComandoLastInserted(sql, valores) {
        var cnn = this.#conexao;
        return new Promise(function(res, rej) {
            cnn.query(sql, valores, function (error, results, fields) {
                if (error) 
                    rej(error);
                else 
                    res(results.insertId);
            });
        })
    }

}

module.exports = Database;


