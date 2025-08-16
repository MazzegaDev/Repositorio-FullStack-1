const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/", userController.loginView);
router.get("/homePage", userController.homeView);
router.post("/login", userController.newUser);

module.exports = router;
