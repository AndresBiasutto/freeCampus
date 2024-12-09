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
const checkJwt = require("../Middlewares/checkJwt");

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", hasRole(["admin", "teacher", "student"]), getUserHandler);
usersRouter.patch("/:id", patchtUserHandler);
usersRouter.delete("/delete/:id", hasRole(["admin"]), deleteUserHandler);
usersRouter.post("/signUp", signUpUserHandler);
usersRouter.post("/signIn", signInUserHandler);
usersRouter.post("/register",checkJwt, registerUserHandler)

module.exports = usersRouter;
