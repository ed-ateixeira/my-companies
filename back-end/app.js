const express = require('express');
const cors = require('cors');
const connection = require('./db/connection');
const routes = require('./routes/companies');

const app = express();

app.use(cors());
app.use(express.json());

// Mongo connection
connection();

app.use('/api', routes);

// Server start
app.listen(3000, () => {
  console.log('server running');
});
