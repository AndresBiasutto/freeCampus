const { Module, File } = require("../../db");

const getSubject = async (id) => {
  const module = await Module.findByPk(id, {
    include: {
      model: File,
      as: "Files",
      attributes: ["data"],
    },
  });

  return module;
};

module.exports = getSubject;