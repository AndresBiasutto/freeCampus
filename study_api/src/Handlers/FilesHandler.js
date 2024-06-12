const getFiles = require("../Controllers/Files/getFiles");
const postFiles = require("../Controllers/Files/postFiles");
const listFiles = require("../Controllers/Files/downloadFile");
const getOneFile = require("../Controllers/Files/getOneFile");
const downloadFile = require("../Controllers/Files/downloadFile");

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

module.exports = {
  getFilesHandler,
  postFileHandler,
  listFilseHandler,
  getOneFileHandler,
};
