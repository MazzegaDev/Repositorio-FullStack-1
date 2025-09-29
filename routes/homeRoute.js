const express = require("express");
const HomeController = require("../controllers/homeController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

const homeController = new HomeController();
let auth = new AuthMiddleware();
router.get("/", auth.validar, homeController.homeView);

module.exports = router;