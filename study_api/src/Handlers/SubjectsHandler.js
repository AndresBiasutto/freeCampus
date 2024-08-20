const getSubjects = require("../Controllers/Subjects/getSubjects");
const postSubject = require("../Controllers/Subjects/postSubject");
const postExam = require("../Controllers/Subjects/postExam");
const postDate = require("../Controllers/Subjects/postDate");
const getSubject = require("../Controllers/Subjects/getSubject");
const deleteSubject = require("../Controllers/Subjects/deleteSubject");
const patchSubjectStudents = require("../Controllers/Subjects/patchSubjectStudents");
const removeSubjectStudent = require("../Controllers/Subjects/removeSubjectStudent");
const getSubjectByName = require("../Controllers/Subjects/getSubjectByName");
const getStudentSubjects = require("../Controllers/Subjects/getStudentSubjects");
const updateSubject = require("../Controllers/Subjects/updateSubject");

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
const postExamHandler = async (req, res) => {
  const exam = req.body;
  console.log(exam);
  
  if (!exam) {
    console.log("No exam provided");
    return res.status(400).json({ error: "No exam provided" });
  }
  try {
    const response = await postExam(exam);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading exam: ", error);
    return res.status(500).json({ error: error.message });
  }
};
const postScheduleDatesHandler = async (req, res) => {
  const date = req.body;
  console.log(date);
  
  if (!date) {
    console.log("No date provided");
    return res.status(400).json({ error: "No date provided" });
  }
  try {
    const response = await postDate(date);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading date: ", error);
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
const patchSubject = async (req, res)=>{
  const { id } = req.params;
  const subjectData = req.body;
  try {
    const updatedSubject= await updateSubject(id, subjectData);
    return res.status(200).json(updatedSubject);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
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
  getStudentSubjectsHandler,
  patchSubject,
  postExamHandler,
  postScheduleDatesHandler
};
