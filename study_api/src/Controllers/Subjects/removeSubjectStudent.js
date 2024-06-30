const { User, Subject } = require("../../db");

const removeSubjectStudent = async (subjectId, studentId) => {
  try {
    // Find the subject by its ID
    const subject = await Subject.findByPk(subjectId);

    if (!subject) {
      return { error: "Subject not found" };
    }

    // Find the student by their ID
    const student = await User.findByPk(studentId);

    if (!student) {
      return { error: "Student not found" };
    }

    // Disassociate the student from the subject
    await subject.removeStudent(student); // Use the correct method based on the alias

    // Fetch the updated Subject with details
    const updatedSubject = await Subject.findByPk(subjectId, {
      include: [
        {
          model: User,
          as: 'students',
          attributes: ["id", "name", "email"],
        },
      ],
    });

    return updatedSubject;
  } catch (error) {
    console.error("Error removing student from subject:", error);
    throw new Error("Error removing student from subject: " + error.message);
  }
};

module.exports = removeSubjectStudent;