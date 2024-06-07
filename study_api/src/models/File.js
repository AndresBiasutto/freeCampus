const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const File = sequelize.define('File', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    data: {
      type: DataTypes.JSON, // Almacenar la URL como cadena
      allowNull: false,
    },
    // Otros campos si es necesario
  });

  return File;
};