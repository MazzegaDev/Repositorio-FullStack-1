const express = require("express");
const HomeController = require("../controllers/homeController");

const router = express.Router();

const homeController = new HomeController();
router.get("/", homeController.homeView);
router.get("/carros", homeController.carrosView);
router.get("/cadastro", homeController.cadastroView);
router.post("/cadastro", homeController.cadastro);

module.exports = router;