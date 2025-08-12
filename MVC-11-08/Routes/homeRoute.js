const express = require("express");
const homeController = require("../Controller/homeController");
const router = express.Router();

router.get("/", homeController.homeView);
router.get("/carros", homeController.carrosView);

module.exports = router;
