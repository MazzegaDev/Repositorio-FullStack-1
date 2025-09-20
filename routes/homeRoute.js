const express = require("express");
const HomeController = require("../controllers/homeController");
const authMiddleware = require("../middleware/authMiddleware");

const auth = new authMiddleware();
const router = express.Router();

const homeController = new HomeController();
router.get("/", auth.validar, homeController.homeView);

module.exports = router;
