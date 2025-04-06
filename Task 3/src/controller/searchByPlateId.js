const findCarByPlateNumber = (req, res) => {
    try {
      const { platenumber } = req.query;
      const plateNumberList = readFromFile("plateNumberList");
      const findPlateNumber = plateNumberList.find((item) => item.plateNumber === platenumber);
      if (!findPlateNumber) {
        return res.status(404).json({
          message: 'Plate number not found'
        });
      }
      const fileList = readFromFile("fileList");
      const foundFiles = fileList.filter((item) => item.plateNumber === platenumber);
      const commentList = readFromFile("commentList");
      const foundComments = commentList.filter((item) => item.plateNumber === platenumber);
      res.status(200).json({
        fileList: foundFiles,
        commentList: foundComments
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  };
  
  module.exports = { findCarByPlateNumber };
  