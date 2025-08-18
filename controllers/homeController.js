
let carrosBd = [
    "Marea",
    "Uno",
    "206 SW",
    "Focus"
]

class HomeController {

    homeView(req, res) {
        res.render('index');
    }

    cadastroView(req, res) {
                            
        res.render('cadastro', {layout: false});//Desabilita o layout padrao nessa pagina, se quisermos um layout proprio basta trocar false pelo nome do segundo layout
    }

    cadastro(req, res) {
        console.log(req.body);
        let retorno = "";
        if(req.body.carro != "") {
            carrosBd.push(req.body.carro);
            retorno = "Veículo cadastrado com sucesso!";
        }
        else {
            retorno = "Veículo inválido!";
        }
        res.render('cadastro', {msgRetorno: retorno});
    }

    carrosView(req, res) {
        let horas = new Date().getHours();
        res.render("carros", {carrosRender: carrosBd, horasDia: horas});
    }

}

module.exports = HomeController;