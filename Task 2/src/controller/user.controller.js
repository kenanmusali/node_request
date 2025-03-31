const array = require("../data");

const getUsers = (_, res) => {
    res.status(200).json({
        message: array
    });
}

const createUser = (req, res) => {
    array.push(req.body);
    res.status(202).json({
        message: 'User created successfully',
        user: req.body
    });
    
}

module.exports = {
    getUsers,
    createUser
};