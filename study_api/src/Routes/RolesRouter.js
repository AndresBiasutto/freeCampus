const {Router}= require("express")
const rolesRouter= Router();
const {postRoleHandler, deleteRoleHandler}= require("../Handlers/RolesHandler");
const hasRole = require("../Middlewares/hasRole");

// rolesRouter.get("/", getUsersHandler)
rolesRouter.post("/:name",  postRoleHandler)
rolesRouter.delete("/:id",  deleteRoleHandler)

module.exports= rolesRouter;