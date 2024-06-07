const  {Router}  = require('express');
const usersRouter= require("./UsersRouter")
const subjectsRouter= require("./SubjectsRouter")
const rolesRouter = require("./RolesRouter")
const filesRouter = require("./FilesRouter")
const modulesRouter = require("./modulesRouter")

const router = Router();

router.use("/users", usersRouter);
router.use("/subjects", subjectsRouter);
router.use("/roles", rolesRouter);
router.use("/files", filesRouter);
router.use("/modules", modulesRouter);

module.exports = router;