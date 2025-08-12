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
    res.render("carros", {carrosRender: carrosDB});
  }
}

module.exports = new homeController();
