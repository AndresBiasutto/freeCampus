const getSubjects = require("../Controllers/Subjects/getSubjects");
const postSubject = require("../Controllers/Subjects/postSubject");
const getSubject = require("../Controllers/Subjects/getSubject");
const deleteSubject = require("../Controllers/Subjects/deleteSubject");
const patchSubjectStudents = require("../Controllers/Subjects/patchSubjectStudents");
const removeSubjectStudent = require("../Controllers/Subjects/removeSubjectStudent");
const getSubjectByName = require("../Controllers/Subjects/getSubjectByName");
const getStudentSubjects = require("../Controllers/Subjects/getStudentSubjects");

const getSubjectsHandler = async (req, res) => {
  const {name}= req.query;
  try {
    const response =  name? await getSubjectByName(name) : await getSubjects();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getStudentSubjectsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getStudentSubjects(id);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postSubjectHandler = async (req, res) => {
  const subject = req.body;
  if (!subject) {
    console.log("No subject provided");
    return res.status(400).json({ error: "No subject provided" });
  }
  try {
    const response = await postSubject(subject);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading subject: ", error);
    return res.status(500).json({ error: error.message });
  }
};
const patchSubjectStudentsHandler = async (req, res) => {
  const { id } = req.params;
  const { studentsId } = req.body;

  try {
    const updatedSubject = await patchSubjectStudents(id, studentsId);

    if (updatedSubject.error) {
      return res.status(404).json({ error: updatedSubject.error });
    }

    return res.status(200).json(updatedSubject);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const removeSubjectStudentHandler = async (req, res) => {
  const { id, studentId } = req.params; // Get subjectId and studentId from the route parameters

  try {
    const updatedSubject = await removeSubjectStudent(id, studentId);

    if (updatedSubject.error) {
      return res.status(404).json({ error: updatedSubject.error });
    }

    return res.status(200).json(updatedSubject);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneSubjectHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await getSubject(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSubectHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await deleteSubject(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteSubectHandler,
  getSubjectsHandler,
  postSubjectHandler,
  getOneSubjectHandler,
  patchSubjectStudentsHandler,
  removeSubjectStudentHandler,
  getStudentSubjectsHandler
};
