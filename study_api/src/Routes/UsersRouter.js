const { Router } = require("express");
const usersRouter = Router();
const {
  getUsersHandler,
  signUpUserHandler,
  signInUserHandler,
  getUserHandler,
  patchtUserHandler,
  deleteUserHandler,
} = require("../Handlers/UsersHandler");
const hasRole = require("../Middlewares/hasRole");

usersRouter.get("/"/*,  hasRole(["admin", "teacher"])*/, getUsersHandler);
usersRouter.get("/:id", hasRole(["admin", "teacher", "student"]), getUserHandler);
usersRouter.patch("/:id", patchtUserHandler);
usersRouter.delete("/delete/:id"/*,  hasRole(["admin"])*/, deleteUserHandler);
usersRouter.post("/signUp"/*,  hasRole(["admin"])*/, signUpUserHandler);
usersRouter.post("/signIn", signInUserHandler);

module.exports = usersRouter;
