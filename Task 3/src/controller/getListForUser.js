const createFileByCar = (req, res) => {
    const { platenumber } = req.query;
    const file = req.file;
    res.send('File uploaded successfully');
};

module.exports = { createFileByCar };