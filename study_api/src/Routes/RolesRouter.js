const {Router}= require("express")
const rolesRouter= Router();
const {postRoleHandler}= require("../Handlers/RolesHandler");
const hasRole = require("../Middlewares/hasRole");

// rolesRouter.get("/", getUsersHandler)
rolesRouter.post("/:name", hasRole(["admin"]), postRoleHandler)

module.exports= rolesRouter;