const { readFile } = require("../helpers/readfile");
const { v4: uuidv4 } = require('uuid');
const { writefile } = require('../helpers/writefile');

const getAllBlogs = (_, res) => {

    try {
        res.status(200).json({
            message: 'Blogs fetched successfully',
            blogs: readFile(),

        });

    } catch (error) {
        console.log('Error reading file', error);
        return res.status(500).json({
            message: 'Error reading file',
        });
    }
}

const getSingleBlog = (req, res) => {
    try {
        const { id } = req.params;
        const blog = readFile().find((item) => item.id === id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json(blog);
    } catch (error) {
        return res.status(500).json({ message: 'Error reading file' });
    }
}

const createBlog = (req, res) => {
    try {
        const newdata = req.body;
        const blog = readFile();
        const newBlog = {
            id: uuidv4(),
            ...newdata,
        };
        blog.push(newBlog);
        writefile(blog);
        res.status(202).json({
            message: 'Blog created successfully',
            blog: newBlog,
        });
    } catch (error) {
        console.log("Error creating blog", error);
        res.status(500).json({
            message: 'Error creating blog',
        });
    }
}

const editBlog = (req, res) => {

    try {
        const { id } = req.params;
        const { title, body } = req.body;
        const blog = readFile();
        const index = blog.findIndex((blog) => blog.id === id);
        if (index === -1) {
            return res.status(404).json({
                message: 'Blog not found',
            });
        }
        blog[index].title = title ? title : blog[index].title;
        blog[index].body = body ? body : blog[index].body;
        writefile(blog);
        res.status(200).json({
            message: 'Blog updated successfully',
            blog: blog[index],
        });

    } catch (error) {
        console.log('Error updating blog', error);
        res.status(500).json({
            message: 'Error updating blog',
        })
    }
}

const deleteBlog = (req, res) => {

    try {
        const { id } = req.params;
        const blog = readFile();
        const index = blog.findIndex((blog) => blog.id === id);
        if (index === -1) {
            return res.status(404).json({
                message: 'Blog not found',
            });
        }
        blog.splice(index, 1);
        writefile(blog);
        res.status(200).json({
            message: 'Blog deleted successfully',
        });

    } catch (error) {
        console.log('Error deleting blog', error);
        res.status(500).json({
            message: 'Error deleting blog',
        })
    }
}

module.exports = { getAllBlogs, getSingleBlog, createBlog, deleteBlog, editBlog };