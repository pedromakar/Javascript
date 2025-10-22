const express = require('express');
const siteController = require('../controllers/siteController.js');
const produtosController = require('../controllers/produtosController.js');

const router = express.Router();

router.get('/', siteController.index);
router.get('/produtos', produtosController.lista);
router.post('/camisetas', produtosController.cadastrar);

module.exports = router;
