const getFiles = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/getFiles");
const postFiles = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/postFiles");
const listFiles = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/downloadFile");
const getOneFile = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/getOneFile");
const downloadFile = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/downloadFile");
const deleteFile = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/deleteFile")

const getFilesHandler = async (req, res) => {
  try {
    const response = await getFiles();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postFileHandler = async (req, res) => {
  const file = req.file;
  const { moduleId } = req.body;

  if (!file) {
    return res.status(400).json({ error: "No file provided" });
  }
  if (!moduleId) {
    return res.status(400).json({ error: "No module ID provided" });
  }

  try {
    const response = await postFiles(file, moduleId);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const listFilseHandler = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await listFiles(id);
    res.setHeader("Content-Type", "application/pdf"); // Establece el tipo de contenido según el tipo de archivo
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getOneFileHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await downloadFile(id);
    res.json(response);
  } catch (error) {
    console.error("Error downloading file: ", error);
    res.status(500).json({ error: error.message });
  }
};
const deleteFileHandler = async (req, res) => {
  const { fileId } = req.params;

  if (!fileId) {
    return res.status(400).json({ error: "No file ID provided" });
  }

  try {
    const response = await deleteFile(fileId);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFileHandler;

module.exports = {
  getFilesHandler,
  postFileHandler,
  listFilseHandler,
  getOneFileHandler,
  deleteFileHandler
};
