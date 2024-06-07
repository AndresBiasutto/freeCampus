const getModules = require("../Controllers/Modules/getModules");
const postModule = require("../Controllers/Modules/postModule");
const getModule = require("../Controllers/Modules/getModule");

const getModulesHandler = async (req, res) => {
  try {
    const response = await getModules();
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
};
