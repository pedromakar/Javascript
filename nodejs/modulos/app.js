const modulo = require('./meuModulo'); // Importando o módulo
const idade = require('./calculadra_idade');
const mensagem = modulo.saudacao('Joédio'); // Executando a função
const idadeem2025 = idade.idade('Joédio', 1990);

console.log(mensagem);
console.log(idadeem2025);