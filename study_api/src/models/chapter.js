const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Chapter = sequelize.define('Chapter', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    moduleId: {
      type: DataTypes.UUID,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: true });

  return Chapter;
};
