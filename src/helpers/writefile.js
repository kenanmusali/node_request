const fs = require('fs');

const writefile = (data) => {
  const blog = JSON.stringify(data, null, 2);
  fs.writeFile('db.json', blog, (err) => {
    if (err) {
      console.error('Failed to write file:', err);
    } else {
      console.log('File written successfully');
    }
  });
};

module.exports = { writefile };
