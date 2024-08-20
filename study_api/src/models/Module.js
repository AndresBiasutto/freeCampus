const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Module = sequelize.define(
    "Module",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      dateStart: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateEnd: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );

  // Module.associate = (models) => {
  //   Module.belongsTo(models.Video, { foreignKey: "moduleId", as: "Module" });
  //   Module.hasMany(models.File, { foreignKey: 'moduleId', as: 'Files' });
  // };

  return Module;
};
