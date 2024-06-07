const getSubjects = require("../Controllers/Subjects/getSubjects");
const postSubject = require("../Controllers/Subjects/postSubject");
const getSubject = require("../Controllers/Subjects/getSubject");
const deleteSubject = require("../Controllers/Subjects/deleteSubject")

const getSubjectsHandler = async (req, res) => {
  try {
    const response = await getSubjects();
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
};
