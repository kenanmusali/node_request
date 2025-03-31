const fs = require('fs');

const writefile = (data) => {
  const stringData = JSON.stringify(data, null, 2);
  
  // Add the missing callback to handle success or error
  // fs.writeFileSync('db.json', blog, (err) => {
  //   if (err) {
  //     console.log('Error writing file:', err);
  //   } else {
  //     console.log('File successfully written!');
  //   }
  // });

  fs.writeFileSync('db.json', stringData, );
};

module.exports = { writefile };
