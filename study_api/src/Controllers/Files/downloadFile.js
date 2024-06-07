const { File } = require("../../db");

const downloadFile = async (id) => {
  try {
    const file = await File.findByPk(id);
    return file.data;
  } catch (error) {
    throw error;
  }
};

module.exports = downloadFile;
