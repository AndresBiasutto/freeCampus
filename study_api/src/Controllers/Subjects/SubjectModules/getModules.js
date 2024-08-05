const { Module, File, Chapter, Video } = require("../../../db");

const getModules = async () => {
  const all = await Module.findAll({
    include: [
      {
        model: Chapter,
        as: "chapters",
        attributes: ["id", "name", "description"],
        include: [
          {
            model: File,
            as: "Files",
            attributes: ["id","data"],
          },
          {
            model: Video,
            attributes: ["id", "videoUrl"],
          },
        ],
      },
    ],
  });

  return all;
};

module.exports = getModules;
