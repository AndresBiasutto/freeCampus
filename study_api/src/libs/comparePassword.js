const bcrypt = require('bcrypt');

const comparePassword = async (password, hashedPassword) => {
    try {
      const match = await bcrypt.compare(password, hashedPassword);
      return match; // Devuelve true si la contraseña coincide, false en caso contrario
    } catch (error) {
      console.error("Error al comparar contraseñas:", error);
      throw error;
    }
  };

  module.exports= comparePassword;