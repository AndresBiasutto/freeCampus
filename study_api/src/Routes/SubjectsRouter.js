const { Router } = require("express");

const { getSubjectsHandler, postSubjectHandler, deleteSubectHandler, getOneSubjectHandler, putSubjectHandler } = require("../Handlers/SubjectsHandler");

const subjectsRouter = Router();

subjectsRouter.get("/", getSubjectsHandler);
subjectsRouter.post("/",  postSubjectHandler);
subjectsRouter.delete("/:id", deleteSubectHandler); 
// subjectsRouter.put("/id", putSubjectHandler)
subjectsRouter.get("/:id", getOneSubjectHandler); 

module.exports = subjectsRouter;