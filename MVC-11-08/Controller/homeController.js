let carrosDB=[
    'Astra',
    'Civic',
    'Corolla',
    'Ford Ka',
    'Fiesta',
    'Opala',
    'Palio',
    'Polo',
    'Kwid (antena alta)'
]


class homeController {
  homeView(req, res) {
    res.render("index");
  }

  

  carrosView(req, res) {
    let horas = new Date().getHours();
    res.render("carros", {carrosRender: carrosDB, horasDia: horas});
  }
}

module.exports = new homeController();
