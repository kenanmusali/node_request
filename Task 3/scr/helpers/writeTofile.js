const fs = require('fs');
function writeToFile(dbName, data) {
    console.log("writeToFile", dbName, data);

    const jsonData = fs.readFileSync("./src/db/index.json");
    const allData = JSON.parse(jsonData);
    allData[dbName] = data;

    fs.writeFileSync("./src/db/index.json", JSON.stringify(allData, null, 4));
}

module.exports = writeToFile;