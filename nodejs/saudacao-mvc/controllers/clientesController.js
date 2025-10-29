const path = require('path');
const loginModel = require('../models/loginModel');

module.exports = {
  index: (req, res) => {
    // Página principal de clientes (após login bem-sucedido)
    res.sendFile('clientes.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('Login.html', { root: './views' });
  },

  autenticar: (req, res) => {
    const { email, senha } = req.body;
    const resultado = loginModel.autenticarUsuario(email, senha);
    if (resultado.autenticado) {
      // redireciona para a página principal de clientes após sucesso
      res.redirect('/clientes');
    } else {
      // retorna a mensagem de erro na tela de login
      res.send(`<h1>${resultado.mensagem}</h1><p><a href="/clientes/login">Voltar</a></p>`);
    }
  }
};