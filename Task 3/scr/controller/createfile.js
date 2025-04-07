const { v4: uuidv4 } = require('uuid');
const readFromFile = require('../helpers/reFromFile');
const writeToFile = require('../helpers/writeTofile');

const createFileByCar = (req, res) => {
    const { platenumber } = req.params;
    const file = req.file;

    const newFile = {
        id: uuidv4(),
        filePath: "/uploads/" + file.filename,
        plateNumber: platenumber
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

    const data = readFromFile("fileList");
    data.push(newFile);
    writeToFile("fileList", data);



    res.status(200).json({
        message: "File uploaded successfully",
        file: newFile
    });
}

module.exports = createFileByCar