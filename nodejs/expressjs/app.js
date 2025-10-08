// importa o módulo express
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// rota para a página inicial
app.get('/', (req, res) => {
  res.status(200).send('Bem-vindo à página inicial!');
});

// rota para a página sobre
app.get('/sobre', (req, res) => {
  res.status(200).send('Esta é a página sobre.');
});

// rota para a página de contato
app.get('/contato', (req, res) => {
  res.status(200).send('Página de contato.');
});

// rota para qualquer outra URL não encontrada
app.use((req, res) => {
  res.status(404).send('Página não encontrada.');
});

// servidor escutando na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express rodando em http://localhost:${PORT}`);
});
