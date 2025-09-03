//calculo idade
function idade(nome, anoAtual, anoNasc){
    idade = anoAtual - anoNasc;
    return `Olá, ${nome}! Você tem ${idade} anos.`;
  
}
module.exports = {
    idade
};