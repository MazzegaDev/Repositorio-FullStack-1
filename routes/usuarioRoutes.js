const express = require("express");
const ctrl = require("../controllers/usuarioController")
const router = express.Router();

router.get("/", ctrl.listarView);
router.get("/cadastrar", ctrl.cadastrarView);

module.exports = router;