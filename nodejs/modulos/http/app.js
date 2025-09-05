//importando o modulo http
const http = require('http');

//criando o servidor
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //enviando a resposta
    res.end('Olá, mundo!');
}).listen(8080); 
console.log('Servidor rodando em http://localhost:8080/');