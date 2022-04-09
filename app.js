const path = require('path');
const express = require('express');

const mainRouter = require('./routes/mainRoutes');

// Express specific stuff
const app = express();
// Set template engine as pug
app.set('view engine', 'pug');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Serving static files
app.use(express.static(path.join(__dirname, './public')));

app.use('/', mainRouter);

module.exports = app;
