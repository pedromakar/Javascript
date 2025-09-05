const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
    let data = '';
    // Recebendo os dados em pedaços
    res.on('data', (chunk) => {
        data += chunk;
    });
    // Quando todos os dados forem recebidos
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Erro:" + err.message);
}); 