// Import necessary modules
const express = require('express');
const {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    editBlog,
    deleteBlog
} = require('../controller/blog.controller');

const routerBlog = express.Router();

routerBlog.get('/blogs', getAllBlogs);

routerBlog.get('/blog/:id', getSingleBlog);

routerBlog.post('/blogs', createBlog);

routerBlog.patch('/blog/:id', editBlog);

routerBlog.delete('/blog/:id', deleteBlog);

module.exports = routerBlog;
