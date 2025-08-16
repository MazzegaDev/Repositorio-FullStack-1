let carrosDB = [
  "Astra",
  "Civic",
  "Corolla",
  "Ford Ka",
  "Fiesta",
  "Opala",
  "Palio",
  "Polo",
  "Kwid (antena alta)",
];

class homeController {
  homeView(req, res) {
    res.render("index");
  }

  addVeiculo(req, res) {
    let retorno = "";
    console.log(req.body);
    if (req.body.carro != "") {
      carrosDB.push(req.body.carro);
      retorno = "veiculo cadastrado com sucesso!";
    } else {
      retorno = "veiculo invalido";
    }
    res.render("cadastro", { msgRetorno: retorno });
  }

  cadastroView(req, res) {
    res.render("cadastro");
  }

  carrosView(req, res) {
    let horas = new Date().getHours();
    res.render("carros", { carrosRender: carrosDB, horasDia: horas });
  }
}

module.exports = new homeController();
