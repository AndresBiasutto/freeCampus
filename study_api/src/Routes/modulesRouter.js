const { Router } = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const {
  getModulesHandler,
  postModulesHandler,
  deleteModuleHandler,
  getChaptersHandler,
  getOneChapterHandler,
  postFileHandler,
  getOneModuleHandler,
  postChaptersHandler,
  postVideosHandler,
  getFilesHandler,
  patchModuleHandler
} = require("../Handlers/ModulesHandler");
const hasRole = require("../Middlewares/hasRole");

const modulesRouter = Router();

modulesRouter.get(
  "/",
  getModulesHandler
);
modulesRouter.post("/", postModulesHandler);
// modulesRouter.post("/videos", postVideosHandler)
modulesRouter.post("/chapters", postChaptersHandler);
modulesRouter.get(
  "/chapters",
  getChaptersHandler
);
modulesRouter.get(
  "/chapters/:id",
  getOneChapterHandler
);
modulesRouter.post("/chapters/videos", postVideosHandler);
modulesRouter.post("/chapters/files", upload.single("file"), postFileHandler);
modulesRouter.get(
  "/chapters/files",
  getFilesHandler
);
modulesRouter.delete("/:id", deleteModuleHandler);
modulesRouter.patch("/:id", patchModuleHandler);
// modulesRouter.put("/id", putSubjectHandler)
modulesRouter.get(
  "/:id",
  getOneModuleHandler
);

module.exports = modulesRouter;
