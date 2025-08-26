const funcoesMatematicas = require('./funcoes_matematicas');

// Exemplo de uso:
const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadosubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`Resultado da subtração: ${resultadosubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(6, 7);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(20, 4);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

//idade
const idade = funcoesMatematicas.calculaIdade(1990, 2024);
console.log(`Idade calculada: ${idade} anos`);