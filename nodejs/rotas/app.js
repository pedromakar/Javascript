// importa o módulo http nativo do Node.js
import http from 'http';

const PORT = 3000;

// cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    // define o tipo de conteúdo da resposta
    response.setHeader('Content-Type', 'text/plain');

    // rotas simples
if (url === '/' && method === 'GET') {
    response.statusCode = 200;
    response.end('Bem-vindo à página inicial!');
} else if (url === '/sobre' && method === 'GET') {
    response.statusCode = 200;
    response.end('Esta é a página sobre.');
} else if (url === '/contato' && method === 'GET') {  // rota extra
    response.statusCode = 200;
    response.end('Página de contato.');
} else {
    response.statusCode = 404;
    response.end('Página não encontrada.');
}
});

// servidor escutando na porta definida
server.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
