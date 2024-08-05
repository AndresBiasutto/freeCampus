const { Router } = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const {
  getModulesHandler,
  postModulesHandler,
  getChaptersHandler,
  getOneChapterHandler,
  postFileHandler,
  getOneModuleHandler,
  postChaptersHandler,
  postVideosHandler,
} = require("../Handlers/ModulesHandler");

const modulesRouter = Router();

modulesRouter.get("/", getModulesHandler);
modulesRouter.post("/", postModulesHandler);
// modulesRouter.post("/videos", postVideosHandler)
modulesRouter.post("/chapters", postChaptersHandler);
modulesRouter.get("/chapters", getChaptersHandler);
// modulesRouter.get("/chapters/:id", getOneChapterHandler);
modulesRouter.post("/chapters/videos", postVideosHandler);
modulesRouter.post("/chapters/files", upload.single("file"), postFileHandler);
// modulesRouter.delete("/:id", DeleteSubectHandler);
// modulesRouter.put("/id", putSubjectHandler)
modulesRouter.get("/:id", getOneModuleHandler);

module.exports = modulesRouter;
