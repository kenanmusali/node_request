const express = require('express');
const { readFile } = require('./src/helpers/readfile');

const app = express();
// const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { writefile } = require('./src/helpers/writefile');

app.use(express.json());
// missing line

// const fs = require('fs');

// const data = JSON.parse(fs.readFileSync('.db.json'));
// console.log(data);

// const testController = (_, res) => {
//   res.json('Hello World');
// }
// app.get('/', testController)

// 

// app.get('/', (_, res) => {
//   res.json({
//     message: 'Hello World',
//   });
// });

app.get('/blogs', (req, res) => {
  res.status(200).json({
    message: 'Blogs fetched successfully',
    blogs: readFile(),

  });
});

app.post('/blogs', (req, res) => {
  const newdata = req.body;
  const blog = readFile();
  const newBlog = {
    id: uuidv4(),
    ...newdata,
  }
  blog.push(newBlog);
  writefile(blogs);
  console.log(newdata);
});
app.patch('/blog/:id', (req, res) => {});
app.delete('/blog/:id', (req, res) => {});


app.listen(8081, () => {
  console.log('Server is running on port http://localhost:8080/');
});


// api
// deploy
// crud
// database
// db




