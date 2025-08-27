function idade(nome, anoNascimento) {
    idade = 2025 - anoNascimento
    return `Olá, ${nome}! Você tem ${idade} anos.`;
}


// Exportando a função para que possa ser usada em outros arquivos
module.exports = { idade
    };
