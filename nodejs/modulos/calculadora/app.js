//const funcoesMatematicas = require('./funcoes_matematicas');
//const calculaIdade = require('./calculaidade');

// Exemplo de uso:
import * as funcoesMatematicas from './funcoes_matematicas.js';
import * as calculaIdade from './calculaidade.js';

//SOMA
console.log("adicão:" + funcoesMatematicas.somar(5, 3)); 
console.log("subtração: " + funcoesMatematicas.subtrair(10, 4));
console.log("multiplicação: " + funcoesMatematicas.multiplicar(6, 7));
console.log("divisão: " + funcoesMatematicas.dividir(20, 4));  
console

//IDADE
console.log(calculaIdade.idade("pedro", 2025, 2008));