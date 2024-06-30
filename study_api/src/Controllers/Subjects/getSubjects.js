const { Subject, Module, User } = require("../../db");

const getSubjects = () => {
  const allSubjects = Subject.findAll({
    include: [
      {
        model: Module,
        attributes: ["id", "name", "description"],
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