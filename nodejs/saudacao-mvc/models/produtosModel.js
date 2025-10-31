module.exports = {
    verificaCadastro: (id, descricao, quantidade, preco) => {
    return `<h1>Olá! Seu cadastro está realizado com sucesso! 
    <br>
    <br>ID: ${id} 
    <br>Descrição: ${descricao} 
    <br>Quantidade: ${quantidade} 
    <br>Preço: ${preco}</h1>`;
  }
};
