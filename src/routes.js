const express = require('express');
const routes = express.Router();

const Fornecedor = require ('./controllers/fornecedor.controllers');
const Produto = require ('./controllers/produto.controller');


// Rotas Fornecedor
routes.put('/fornecedor', Fornecedor.update);
routes.post('/fornecedor', Fornecedor.createFornecedor);
routes.get('/fornecedores', Fornecedor.index);
routes.get('/details/:_id', Fornecedor.details);
routes.delete('/fornecedor/:_id', Fornecedor.delete);


//Rotas Produtos
routes.put('/produto', Produto.update);
routes.post('/produto', Produto.createProduto);
routes.get('/produtos', Produto.index);
routes.get('/produto-details/:_id', Produto.details);
routes.delete('/produto/:_id', Produto.delete);


module.exports = routes;


