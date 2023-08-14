// app.js
const express = require('express');
const app = express();
const cors = require('cors');

// Middleware para permitir o CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json());

// Configuração das rotas
const clientesRouter = require('./routes/routeClientes');
app.use('/api/clientes', clientesRouter);

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
