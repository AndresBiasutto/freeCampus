const { User, Subject } = require("../../db");

const patchSubjectStudents = async (id, studentsId) => {
  try {
    // Find the subject by its ID
    const subject = await Subject.findByPk(id);

    if (!subject) {
      return { error: "Subject not found" };
    }

    // Find the users by their IDs
    const students = await User.findAll({
      where: {
        id: studentsId,
      },
    });

    if (students.length !== studentsId.length) {
      return { error: "One or more students not found" };
    }

    // Associate the students with the subject
    await subject.addStudents(students);

    // Fetch the updated Subject with details
    const updatedSubject = await Subject.findByPk(id, {
      include: [
        {
          model: User,
          as: 'students',
          attributes: ["id", "name", "email", "image"],
        },
      ],
    });

    return updatedSubject;
  } catch (error) {
    console.error("Error updating subject with students:", error);
    throw new Error("Error updating subject with students: " + error.message);
  }
};

module.exports = patchSubjectStudents;
