const express = require('express');
const app = express();
const { getUsers, createUser } = require('./src/controller/user.controller');
app.use(express.json());
app.get('/', getUsers);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

