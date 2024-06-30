const { Router } = require("express");

const {
  getSubjectsHandler,
  postSubjectHandler,
  deleteSubectHandler,
  getOneSubjectHandler,
  patchSubjectStudentsHandler,
  removeSubjectStudentHandler,
  getStudentSubjectsHandler
} = require("../Handlers/SubjectsHandler");

const subjectsRouter = Router();

subjectsRouter.get("/", getSubjectsHandler);
subjectsRouter.get("/StudentSubjects/:id", getStudentSubjectsHandler)
subjectsRouter.post("/", postSubjectHandler);
subjectsRouter.delete("/:id", deleteSubectHandler);
subjectsRouter.patch("/:id/students", patchSubjectStudentsHandler);
subjectsRouter.get("/:id", getOneSubjectHandler);
subjectsRouter.delete("/:id/students/:studentId", removeSubjectStudentHandler);

module.exports = subjectsRouter;
