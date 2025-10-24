import http from 'http';

const PORT = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Pagina Inicial</h1>');
    }
    else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end('<h1>Sobre nós</h1> <p>Esta empresa é uma aplicação de exemplo com Node.js puro.</p>');
    }
    else if (url === '/contato') {
        response.statusCode = 200;
        response.end('<h1>Fale conosco</h1>');
    }
    else {
        response.statusCode = 404;
        response.end('<h1>404 - Página não encontrada</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});