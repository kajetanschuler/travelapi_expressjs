const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products')

app.use('/products', productRoutes) // sets upp middleware

module.exports = app;