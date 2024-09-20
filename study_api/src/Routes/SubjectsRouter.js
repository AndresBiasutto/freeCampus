const { Router } = require("express");

const {
  getSubjectsHandler,
  postSubjectHandler,
  deleteSubectHandler,
  getOneSubjectHandler,
  patchSubjectStudentsHandler,
  removeSubjectStudentHandler,
  getStudentSubjectsHandler,
  patchSubject,
  postScheduleDatesHandler,
  postExamHandler,
} = require("../Handlers/SubjectsHandler");
const hasRole = require("../Middlewares/hasRole");

const subjectsRouter = Router();

subjectsRouter.get(
  "/StudentSubjects/:id",
  hasRole(["teacher"]),
  getStudentSubjectsHandler
);
subjectsRouter.post("/",
   hasRole(["teacher"]),
   postSubjectHandler
);
subjectsRouter.post("/examdates",
   hasRole(["teacher"]),
   postExamHandler
  );
subjectsRouter.post(
  "/scheduledates",
  hasRole(["teacher"]),
  postScheduleDatesHandler
);
subjectsRouter.delete("/:id",
   hasRole(["teacher"]),
   deleteSubectHandler
  );
subjectsRouter.patch(
  "/:id/students",
  hasRole(["teacher"]),
  patchSubjectStudentsHandler
);
subjectsRouter.patch("/:id", hasRole(["teacher"]), patchSubject);
subjectsRouter.get(
  "/:id",
  hasRole(["admin", "teacher", "student"]),
  getOneSubjectHandler
);
subjectsRouter.get(
  "/",
  hasRole(["admin", "teacher", "student"]),
  getSubjectsHandler
);
subjectsRouter.delete(
  "/:id/students/:studentId",
  hasRole(["admin", "teacher"]),
  removeSubjectStudentHandler
);

module.exports = subjectsRouter;
