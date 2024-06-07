const {Router}= require("express")
const rolesRouter= Router();
const {postRoleHandler}= require("../Handlers/RolesHandler")

// rolesRouter.get("/", getUsersHandler)
rolesRouter.post("/:name", postRoleHandler)

module.exports= rolesRouter;