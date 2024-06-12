const { Module, File } = require("../../db");

const getModules = () => {
  const all = Module.findAll({
    include: {
      model: File,
      as: "Files",
      attributes: ["data"],
    },
  });

  return all;
};

module.exports = getModules;