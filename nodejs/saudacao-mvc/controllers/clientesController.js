module.exports = {
  listar: (req, res) => {
    res.send('Lista de clientes');
  },

  criar: (req, res) => {
    res.send('Cliente criado');
  }
};
