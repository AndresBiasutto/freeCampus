const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User, Role } = require("../db"); // Asegúrate de importar los modelos adecuadamente

const verifyToken = async (req, res, next) => {
  const SECRET = process.env.SECRET;
  const token = req.headers.authorization

  if (!token) return res.status(401).json({ message: "Token not provided" });

  try {
    const decoded = jwt.verify(token, SECRET);


    const user = await User.findByPk(decoded.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const isModerator = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require moderator role" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    const roles = await user.getRoles();

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require admin role" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { verifyToken, isModerator, isAdmin };
