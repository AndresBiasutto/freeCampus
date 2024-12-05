const getUsers = require("../Controllers/Users/getUsers");
const getUserByName = require("../Controllers/Users/getUserByName");
const signUp = require("../Controllers/Users/signUp");
const signIn = require("../Controllers/Users/signIn");
const findUser = require("../Controllers/Users/findUser");
const patchUser = require("../Controllers/Users/patchUser");
const deleteUser = require("../Controllers/Users/deleteUser");
const registerUser = require("../Controllers/Users/registerUser");

const getUsersHandler = async (req, res) => {
  const searchName = req.query.name;
  try {
    const response = searchName ? await getUserByName(searchName) : await getUsers();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const patchtUserHandler = async (req, res) => {
  const { id } = req.params;
  const { name, contactNumber, image, description } = req.body;
  try {
    const response = await patchUser(id, name, contactNumber, image, description );
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const signUpUserHandler = async (req, res) => {
  const { name, e_mail, password, image, roles } = req.body;
  try {
    const signup = await signUp(name, e_mail, password, image, roles);
    res.status(200).json(signup);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const signInUserHandler = async (req, res) => {
  const { e_mail, password } = req.body;
  try {
    const signin = await signIn(e_mail, password);
    res.status(200).json(signin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const registerUserHandler = async (req, res) => {
  const { name, image, e_mail, roles} = req.body;
  try {
    const token = await registerUser(name, image, e_mail, roles);
    res.status(200).json(token);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteUserHandler= async (req, res)=>{
  const {id} = req.params;
  try {
    const response = await deleteUser(id);
    res.status(200).json(response)
  } catch (error) {
  return res.status(500).json({ error: error.message });
  }
}

const getUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await findUser(id);
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  signUpUserHandler,
  signInUserHandler,
  getUserHandler,
  deleteUserHandler,
  patchtUserHandler,
  registerUserHandler
};
