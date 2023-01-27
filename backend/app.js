const express = require('express');
const app = express();

// Set port
require('dotenv').config();
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App Server listening at port:${port}`);
});
