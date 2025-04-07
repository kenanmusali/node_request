const { v4: uuidv4 } = require('uuid');
const readFromFile = require('../helpers/reFromFile');
const writeToFile = require('../helpers/writeTofile');

const createComment = (req, res) => {
    const { comment } = req.body;
    const { platenumber } = req.params;

    const newComment = {
        id: uuidv4(),
        plateNumber: platenumber,
        comment
    }

    const platesNum = readFromFile("plateNumberList");
    let foundIndex = platesNum.findIndex(plate => plate.plateNumber === platenumber)

    if (foundIndex === -1) {
        platesNum.push({
            id: uuidv4(),
            plateNumber: platenumber,
        });
        writeToFile("plateNumberList", platesNum);
    }

    const data = readFromFile("commentList");
    data.push(newComment);
    writeToFile("commentList", data);


    res.status(200).json({
        message: 'Comment added successfully',
        comment: newComment
    });
}

module.exports = createComment;
