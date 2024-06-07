const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Module = sequelize.define('Module', {
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
  }, { timestamps: true });

  Module.associate = (models) => {
    Module.belongsTo(models.Subject, { foreignKey: 'subjectId', as: 'Subject' });
  };

  return Module;
};
