const express = require('express');
const cors = require('cors');
const routes = require('./routes/companies');
const connection = require('./db/connection');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Mongo connection
connection();

// Routes
app.use('/api', routes);

// Server start
app.listen(3000, () => {
  console.log('server on');
});
