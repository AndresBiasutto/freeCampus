// models/File.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const File = sequelize.define("File", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });


  return File;
};
