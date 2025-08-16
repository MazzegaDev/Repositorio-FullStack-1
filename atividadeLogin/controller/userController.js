let passDB = { email: "Fulano@gmail.com", pass: 123 };

class userController {
  newUser(req, res) {
    let msg = "";
    //recuperar a req e comparar com o banco
    let email = req.body.email;
    let pass = req.body.pass;
    if (email == passDB.email && pass == passDB.pass) {
      msg = "Tudo certo karai :) ";
    } else {
      msg = "Deu ruim man :(";
    }
    res.render("login", { msgRetorno: msg });
  }

  loginView(req, res) {
    res.render("loginHome");
  }
}

module.exports = new userController();
