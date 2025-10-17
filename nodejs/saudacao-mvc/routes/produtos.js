const express = require('express');
const router = express.Router();

// Rota GET /produtos
router.get('/', (req, res) => {
  res.send('Lista de produtos');
});

// Rota POST /produtos
router.post('/', (req, res) => {
  res.send('Produto cadastrado');
});

module.exports = router; // <- ESSENCIAL! Exportar o router corretamente
