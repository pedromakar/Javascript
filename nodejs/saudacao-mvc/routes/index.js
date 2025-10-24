const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/formulario', siteController.formulario);
router.post('/saudacao', siteController.saudacao);
router.get('/users', siteController.users);

module.exports = router;
