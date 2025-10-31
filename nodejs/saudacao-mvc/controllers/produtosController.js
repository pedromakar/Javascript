module.exports = {
    produtos: (req, res) => {
        res.sendFile('produtos.html', { root: './views' });
    },

    camisetas: (req, res) => {
        res.sendFile('camisetas.html', { root: './views' });
    }
    ,
    formCadastro: (req, res) => {
            res.sendFile('cadastro.html', { root: './views' });
        },
    
        cadastro: (req, res) => {
            const { id, descricao, quantidade, preco } = req.body;
            const produtosModel = require('../models/produtosModel');
            const mensagem = produtosModel.verificaCadastro(id, descricao, quantidade, preco);
            res.send(mensagem);
        }
};