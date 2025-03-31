const fs = require('fs');

const writefile = (data) => {
  const blog = JSON.stringify(data, null, 2);
  
  // Add the missing callback to handle success or error
  fs.writeFile('db.json', blog, (err) => {
    if (err) {
      console.log('Error writing file:', err);
    } else {
      console.log('File successfully written!');
    }
  });
};

module.exports = { writefile };
