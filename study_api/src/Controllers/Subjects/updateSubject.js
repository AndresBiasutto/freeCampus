const { Subject } = require("../../db");

const updateSubject = async (id, subjectData) => {
  try {
    const subject = await Subject.findByPk(id);

    if (!subject) {
      throw new Error("Subject not found");
    }

    const updatedSubject = await subject.update(subjectData);
    return updatedSubject;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = updateSubject;