const express = require('express');
const routerBlog = require('./blog.router'); 
const route = express.Router();

route.use(routerBlog); 
module.exports = route; 
