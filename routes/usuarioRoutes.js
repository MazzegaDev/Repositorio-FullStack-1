const express = require("express");
const ctrl = require("../controllers/usuarioController")
const router = express.Router();

router.get("/", ctrl.listarView);
router.get("/cadastrar", ctrl.cadastrarView);
router.post("/cadastrar", ctrl.cadastrar);
router.post("/excluir", ctrl.excluir);
router.post("/atualizar", ctrl.atualizar);
router.get("/atualizar/:id", ctrl.atualizarView);
module.exports = router;