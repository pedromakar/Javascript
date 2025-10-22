const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.listar);
router.post('/', clientesController.criar);

module.exports = router;
