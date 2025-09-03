//importando o modulo http
const http = require('http');

//criando o servidor
const servidor = http.createServer((req, res) => {
    //definindo o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //enviando a resposta
    res.end('Olá, mundo! Este é meu primeiro servidor HTTP em Node.js\n');
});listen(3000); 