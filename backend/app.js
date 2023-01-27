const express = require('express');
const app = express();
const cors = require('cors');
// Set port
require('dotenv').config();
const port = process.env.PORT || 5500;
const routes = require('./routes/api');

// enable all CORS requests
app.use(cors());
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/openai', routes);

app.listen(port, () => {
  console.log(`App Server listening at port:${port}`);
});
