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
    ],
  });

  return allSubjects;
};

module.exports = getSubjects;