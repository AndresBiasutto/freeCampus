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
  hasRole(["admin", "teacher", "student"]),
  getModulesHandler
);
modulesRouter.post("/", hasRole(["teacher"]), postModulesHandler);
// modulesRouter.post("/videos", postVideosHandler)
modulesRouter.post("/chapters", hasRole(["teacher"]), postChaptersHandler);
modulesRouter.get(
  "/chapters",
  hasRole(["admin", "teacher", "student"]),
  getChaptersHandler
);
modulesRouter.get(
  "/chapters/:id",
  hasRole(["admin", "teacher", "student"]),
  getOneChapterHandler
);
modulesRouter.post("/chapters/videos", hasRole(["teacher"]), postVideosHandler);
modulesRouter.post("/chapters/files", upload.single("file"), postFileHandler);
modulesRouter.get(
  "/chapters/files",
  hasRole(["admin", "teacher", "student"]),
  getFilesHandler
);
modulesRouter.delete("/:id", hasRole(["teacher"]), deleteModuleHandler);
modulesRouter.patch("/:id", hasRole(["teacher"]), patchModuleHandler);
// modulesRouter.put("/id", putSubjectHandler)
modulesRouter.get(
  "/:id",
  hasRole(["admin", "teacher", "student"]),
  getOneModuleHandler
);

module.exports = modulesRouter;
