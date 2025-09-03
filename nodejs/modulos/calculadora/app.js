const funcoesMatematicas = require('./funcoes_matematicas');
const calculaIdade = require('./calculaidade');

// Exemplo de uso:
const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadosubtracao = funcoesMatematicas.subtrair(10, 4);
console.log(`Resultado da subtração: ${resultadosubtracao}`);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(6, 7);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const resultadoDivisao = funcoesMatematicas.dividir(20, 4);
console.log(`Resultado da divisão: ${resultadoDivisao}`);

//IDADE
console.log(calculaIdade.idade("biboka", 2025, 2008));