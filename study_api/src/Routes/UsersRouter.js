const {Router}= require("express")
const usersRouter= Router();
const {getUsersHandler, postUserHandler, signUpUserHandler, signInUserHandler, getUserHandler, patchtUserHandler}= require("../Handlers/UsersHandler")

usersRouter.get("/", getUsersHandler)
usersRouter.get("/:id", getUserHandler)
usersRouter.post("/", postUserHandler)
usersRouter.patch("/:id", patchtUserHandler)
usersRouter.post("/signUp", signUpUserHandler)
usersRouter.post("/signIn", signInUserHandler)

module.exports= usersRouter;