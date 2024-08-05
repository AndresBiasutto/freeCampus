const { Subject, Module, User, Chapter, File, Video } = require("../../db");

const getSubjects = () => {
  const allSubjects = Subject.findAll({
    include: [
      {
        model: Module,
        attributes: ["id", "name", "description"],
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
    ]
      },
      {
        model: User,
        as: 'creator',
        attributes: ["id", "name"],
      },
      {
        model: User,
        as: 'students',
        attributes: ["id", "name", "email", "image"],
      },
    ],
  });

  return allSubjects;
};

module.exports = getSubjects;