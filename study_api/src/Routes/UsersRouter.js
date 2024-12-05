const { Router } = require("express");
const usersRouter = Router();
const {
  getUsersHandler,
  signUpUserHandler,
  signInUserHandler,
  getUserHandler,
  patchtUserHandler,
  deleteUserHandler,
  registerUserHandler
} = require("../Handlers/UsersHandler");
const hasRole = require("../Middlewares/hasRole");

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", hasRole(["admin", "teacher", "student"]), getUserHandler);
usersRouter.patch("/:id", patchtUserHandler);
usersRouter.delete("/delete/:id", hasRole(["admin"]), deleteUserHandler);
usersRouter.post("/signUp", signUpUserHandler);
usersRouter.post("/signIn", signInUserHandler);
usersRouter.post("/register", registerUserHandler)

module.exports = usersRouter;
