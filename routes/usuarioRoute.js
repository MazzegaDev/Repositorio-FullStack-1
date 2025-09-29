const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

let auth = new AuthMiddleware();
let ctrl = new UsuarioController();
router.get("/", auth.validar, ctrl.listarView);
router.get("/cadastrar", auth.validar, ctrl.cadastrarView);
router.post("/cadastrar", auth.validar, ctrl.cadastrar);
router.post("/alterar", auth.validar, ctrl.alterar);
router.post("/excluir", auth.validar, ctrl.excluir);
router.get("/alterar/:id", auth.validar, ctrl.alterarView);

module.exports = router;