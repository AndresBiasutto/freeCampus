const getModules = require("../Controllers/Subjects/SubjectModules/getModules");
const postModule = require("../Controllers/Subjects/SubjectModules/postModule");
const getModule = require("../Controllers/Subjects/SubjectModules/getModule");
const postVideo = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/postVideo");
const createChapter = require("../Controllers/Subjects/SubjectModules/ModuleChapters/createChapter");
const postFiles = require("../Controllers/Subjects/SubjectModules/ModuleChapters/ChapterFiles/postFiles");
const getChapters = require("../Controllers/Subjects/SubjectModules/ModuleChapters/getChapters");

const getModulesHandler = async (req, res) => {
  try {
    const response = await getModules();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getChaptersHandler = async (req, res) => {
  try {
    const response = await getChapters();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const postModulesHandler = async (req, res) => {
  const module = req.body;
  if (!module) {
    console.log("No module provided");
    return res.status(400).json({ error: "No module provided" });
  }
  try {
    const response = await postModule(module);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading module: ", error);
    return res.status(500).json({ error: error.message });
  }
};
const postVideosHandler = async (req, res) => {
  const {videoUrl, chapterId} = req.body;
  if (!videoUrl) {
    console.log("No videoUrl provided");
    return res.status(400).json({ error: "No videoUrl provided" });
  }
  try {
    const response = await postVideo(videoUrl, chapterId);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading module: ", error);
    return res.status(500).json({ error: error.message });
  }
};
const postFileHandler = async (req, res) => {
  const file = req.file;
  const { chapterId } = req.body;

  if (!file) {
    return res.status(400).json({ error: "No chapter provided" });
  }
  if (!chapterId) {
    console.log(req.body);
    
    return res.status(400).json({ error: "No chapter ID provided" });
  }

  try {
    const response = await postFiles(file, chapterId);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const postChaptersHandler = async (req, res) => {
  const {chapter, moduleId} = req.body;
  if (!chapter) {
    console.log("No chapter provided");
    return res.status(400).json({ error: "No chapter provided" });
  }
  try {
    const response = await createChapter(chapter, moduleId);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error uploading module: ", error);
    return res.status(500).json({ error: error.message });
  }
};
const getOneModuleHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await getModule(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getModulesHandler,
  postModulesHandler,
  getOneModuleHandler,
  postVideosHandler, 
  postChaptersHandler,
  postFileHandler,
  getChaptersHandler
};
