const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Video = sequelize.define('Video', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    videoUrl: {
      type: DataTypes.STRING,
    },
    moduleId: {
      type: DataTypes.UUID,
      // type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });

  // Video.associate = (models) => {
  //   Video.hasMany(models.Module, { foreignKey: 'moduleId', as: 'Video' });
  // }


  return Video;
};
