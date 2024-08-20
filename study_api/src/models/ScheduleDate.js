const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ScheduleDate = sequelize.define('ScheduleDate', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    day: {
      type: DataTypes.STRING,
    },
    hour: {
      type: DataTypes.STRING,
    },
    subjectName: {
      type: DataTypes.STRING,
    },
    subjectId: {
      type: DataTypes.UUID,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: true });


  return ScheduleDate;
};
