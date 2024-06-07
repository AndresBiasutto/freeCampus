const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    contactNumber: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });

  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'role' });
    User.belongsToMany(models.Subject, { through: 'UserSubject' });
    User.hasMany(models.Subject, { as: 'createdSubjects', foreignKey: 'creatorId' });
  };

  return User;
};
