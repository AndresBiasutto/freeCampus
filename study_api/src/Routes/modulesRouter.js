const { Router } = require("express");

const { getModulesHandler, postModulesHandler, DeleteSubectHandler, getOneModuleHandler, putSubjectHandler, postVideosHandler } = require("../Handlers/ModulesHandler");

const modulesRouter = Router();

modulesRouter.get("/", getModulesHandler);
modulesRouter.post("/",  postModulesHandler);
modulesRouter.post("/videos", postVideosHandler)
// modulesRouter.delete("/:id", DeleteSubectHandler); 
// modulesRouter.put("/id", putSubjectHandler)
modulesRouter.get("/:id", getOneModuleHandler); 

module.exports = modulesRouter;