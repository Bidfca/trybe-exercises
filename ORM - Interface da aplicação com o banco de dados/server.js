const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/books');

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);

module.exports = app;