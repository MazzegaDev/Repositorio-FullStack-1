let passDB = { email: "Fulano@gmail.com", pass: 123 };

class userController {
  newUser(req, res) {
    let msg = "";
    //recuperar a req e comparar com o banco
    let email = req.body.email;
    let pass = req.body.pass;
    if (email == passDB.email && pass == passDB.pass) {
      return res.redirect("/homePage");
    } else {
      msg = "Nao foi possivel fazer login. Email ou senha invalidos";
    }
    res.render("loginHome", { msgReturn: msg });
    msg = "";
    
  }

  homeView(req, res){
    res.render("homePage")
  }

  loginView(req, res) {
    res.render("loginHome");
  }
}

module.exports = new userController();
