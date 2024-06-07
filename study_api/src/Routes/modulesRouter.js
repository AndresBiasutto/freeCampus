const { Router } = require("express");

const { getModulesHandler, postModulesHandler, DeleteSubectHandler, getOneModuleHandler, putSubjectHandler } = require("../Handlers/ModulesHandler");

const subjectsRouter = Router();

subjectsRouter.get("/", getModulesHandler);
subjectsRouter.post("/",  postModulesHandler);
// subjectsRouter.delete("/:id", DeleteSubectHandler); 
// subjectsRouter.put("/id", putSubjectHandler)
subjectsRouter.get("/:id", getOneModuleHandler); 

module.exports = subjectsRouter;