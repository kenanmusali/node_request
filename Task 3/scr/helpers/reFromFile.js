const fs = require('fs');
function readFromFile(dbName) {
    const data = fs.readFileSync("./src/db/index.json");
    const jsonData = JSON.parse(data);
    return jsonData[dbName];
}

module.exports = readFromFile;
