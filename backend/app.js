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
// 自動將 request 中的 URL-encoded 格式資料解析到 req.body，常見於 <form> 的 POST 資料
app.use(express.urlencoded({ extended: true }));

app.use('/openai', routes);

app.listen(port, () => {
  console.log(`App Server listening at port:${port}`);
});
