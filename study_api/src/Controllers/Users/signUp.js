const { User, Role } = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const hashPassword = require("../../libs/hashPassword");

const signUp = async (name, e_mail, password, image, roles) => {
  const SECRET = process.env.SECRET;

  try {
    const encriptedPassword = await hashPassword(password);
    const existingUser = await User.findOne({ where: { email: e_mail } });

    if (existingUser) {
      return "El usuario ya existe";
    }

    const newUser = await User.create({
      name,
      e_mail,
      password: encriptedPassword,
      image,
    });

    if (roles) {
      const foundRole = await Role.findByPk(roles);
      if (foundRole) {
        await newUser.setRole(foundRole);
      } else {
        throw new Error("El rol especificado no existe");
      }
    } else {
      const defaultRole = await Role.findOne({ where: { name: "Student" } });
      if (defaultRole) {
        await newUser.setRole(defaultRole);
      } else {
        throw new Error("El rol por defecto no está definido");
      }
    }

    const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: "24h" });

    return token;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

module.exports = signUp;
