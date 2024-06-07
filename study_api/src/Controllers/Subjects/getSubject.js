const { Subject, Module, User } = require("../../db");

const getSubject = async (id) => {
  const subject = await Subject.findByPk(id, {
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

  return subject;
};

module.exports = getSubject;
