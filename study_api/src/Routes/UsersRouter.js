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

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUserHandler);
usersRouter.patch("/:id", patchtUserHandler);
usersRouter.delete("/delete/:id", deleteUserHandler);
usersRouter.post("/signUp",   signUpUserHandler);
usersRouter.post("/signIn", signInUserHandler);

module.exports = usersRouter;
