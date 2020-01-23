const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/prodicts/:id', ProductController.show);
routes.post('/pruducts', ProductController.store);
routes.put('/pruducts/:id', ProductController.store);
routes.delete("/pruducts/:id", ProductController.detroy);

module.exports = routes;