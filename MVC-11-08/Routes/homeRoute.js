const express = require("express");
const homeController = require("../Controller/homeController");
const router = express.Router();

router.get("/rota2", homeController.homeView);

module.exports = router;
