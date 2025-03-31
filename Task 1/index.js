const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./src/routers');

app.use(express.json());
app.use(route);
app.use(cors());

app.listen(8080, () => {
  console.log('Server is running on port http://localhost:8080/');
});

