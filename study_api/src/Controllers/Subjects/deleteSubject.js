const { Subject, Module } = require("../../db");

const deleteSubject = async (id) => {
  const subjectSelected = await Subject.findByPk(id, {
    include: {
      model: Module,
      attributes: ["id", "name", "description"],
    },
  });
  if (subjectSelected.Modules) {
    subjectSelected.Modules.forEach((module) => {
      Module.destroy({
        where: {
          id: module.id,
        },
      });
    });
  }
  const subjectName = subjectSelected.name;
  Subject.destroy({
    where: {
      id: id,
    },
  });
  return [`Subject ${subjectName} deleted.`]
};

module.exports = deleteSubject;
