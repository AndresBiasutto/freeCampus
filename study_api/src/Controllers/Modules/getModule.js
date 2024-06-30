const { Module, File, Video } = require("../../db");

const getModule = async (id) => {
  const module = await Module.findByPk(id, {
    include: [
      {
        model: File,
        as: "Files",
        attributes: ["data"],
      },
      {
        model: Video,
        attributes: ["id", "videoUrl"],
      },
    ],
  });

  return module;
};

module.exports = getModule;