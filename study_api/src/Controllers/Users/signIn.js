const { User, Role } = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const comparePassword = require("../../libs/comparePassword");

const signIn = async (email, password) => {
  const SECRET = process.env.SECRET;

  const userFound = await User.findOne({
    where: { email },
    include: [{ model: Role, as: "Role" }],
  });

  if (!userFound) {
    return { message: "Usuario no encontrado" };
  }

  const matchPassword = await comparePassword(password, userFound.password);

  if (!matchPassword) {
    return { token: null, message: "Contraseña inválida" };
  }

  const token = jwt.sign({ id: userFound.id }, SECRET, { expiresIn: 84600 });

  const response = {
    id: userFound.id,
    name: userFound.name,
    email: userFound.email,
    role: userFound.Role.name,
    token: token,
    image: userFound.image
  };
  console.log(response);
  return response;
};

module.exports = signIn;
