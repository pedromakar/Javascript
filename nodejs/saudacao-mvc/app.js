const express = require('express');
const path = require('path');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const produtosRouter = require('./routes/produtos'); // Adicionando sua nova rota

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', produtosRouter); // Aqui também

module.exports = app;
