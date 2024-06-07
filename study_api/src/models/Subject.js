const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Subject = sequelize.define('Subject', {
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
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: true });

  Subject.associate = (models) => {
    Subject.belongsToMany(models.User, { through: 'UserSubject' });
    Subject.belongsTo(models.User, { as: 'creator', foreignKey: 'creatorId' });
    Subject.hasMany(models.Module, { foreignKey: 'subjectId' });
  };

  return Subject;
};
