const express = require("express");
const ctrl = require("../controllers/usuarioController");
const AuthMiddleware = require("../middleware/authMiddleware");
const auht = new AuthMiddleware();
const router = express.Router();

router.get("/", auht.validar, ctrl.listarView);
router.get("/cadastrar", auht.validar, ctrl.cadastrarView);
router.post("/cadastrar", auht.validar, ctrl.cadastrar);
router.post("/excluir", auht.validar, ctrl.excluir);
router.post("/atualizar", auht.validar, ctrl.atualizar);
router.get("/atualizar/:id", auht.validar, ctrl.atualizarView);
module.exports = router;
