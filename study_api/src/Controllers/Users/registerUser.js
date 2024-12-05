const { User, Role } = require("../../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const registerUser = async (name, image, e_mail, roles) => {
  const SECRET = process.env.SECRET;

  try {
    const existingUser = await User.findOne({ where: { email: e_mail } });

    if (existingUser) {
              console.log(existingUser);
      return "El usuario ya existe";

      
    }

    const newUser = await User.create({
      name,
      email: e_mail,
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
      const defaultRole = await Role.findOne({ where: { name: "student" } });
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

module.exports = registerUser;
