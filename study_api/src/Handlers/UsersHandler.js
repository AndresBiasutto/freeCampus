const getUsers = require("../Controllers/Users/getUsers");
const postUser = require("../Controllers/Users/postUser");
const signUp = require("../Controllers/Users/signUp");
const signIn = require("../Controllers/Users/signIn");
const findUser= require("../Controllers/Users/findUser")

const getUsersHandler = async (req, res) => {
  try {
    const response = await getUsers(); // Usar User directamente aquí
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const postUserHandler = async (req, res) => {
  const { image, name, created } = req.body;
  try {
    const response = await postUser(image, name, created); // Usar User directamente aquí
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const signUpUserHandler = async (req, res) => {
  const { name, email, password, image, roles } = await req.body;

  try {
    const signup = await signUp(name, email, password, image, roles);
    res.status(200).json(signup);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const signInUserHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const signin = await signIn(email, password);
    res.status(200).json(signin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await findUser( id );
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUserHandler,
  signUpUserHandler,
  signInUserHandler,
  getUserHandler
};
