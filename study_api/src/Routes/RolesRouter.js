const {Router}= require("express")
const rolesRouter= Router();
const {postRoleHandler, deleteRoleHandler, getRolesHandler}= require("../Handlers/RolesHandler");
const hasRole = require("../Middlewares/hasRole");

rolesRouter.get("/", getRolesHandler)
rolesRouter.post("/:name",  postRoleHandler)
rolesRouter.delete("/:id",  deleteRoleHandler)

module.exports= rolesRouter;