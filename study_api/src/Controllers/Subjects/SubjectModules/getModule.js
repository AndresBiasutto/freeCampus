const { Module, File, Video, Chapter } = require("../../../db");

const getModule = async (id) => {
  const module = await Module.findByPk(id, {
    include: [
      {
        model: Chapter,
        as: "chapters",
        attributes: ["id", "name", "description"],
        include: [
          {
            model: File,
            as: "Files",
            attributes: ["id", "data"],
          },
          {
            model: Video,
            attributes: ["id", "videoUrl"],
          },
        ],
      },
    ],
  });

  return module;
};

module.exports = getModule;
