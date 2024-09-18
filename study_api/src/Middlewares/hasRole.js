const jwt = require("jsonwebtoken");
const { User, Role } = require("../db");
require("dotenv").config();

const hasRole = (roles) => {
  return async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Token no proporcionado" });
    }

    try {
      // Verifica el token JWT
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findByPk(decoded.id, {
        include: [{ model: Role, as: "Role" }],
      });

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Verifica si el rol del usuario está en la lista de roles permitidos
      if (!roles.includes(user.Role.name)) {
        return res.status(403).json({ message: "No tienes permiso para realizar esta acción" });
      }

      // Si tiene un rol permitido, continúa con la siguiente función
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token no válido", error: error.message });
    }
  };
};

module.exports = hasRole;
