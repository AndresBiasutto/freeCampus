const { File } = require("../../db");

const getFiles = () => {
  const allFiles = File.findAll();

  return allFiles;
};

module.exports = getFiles;
