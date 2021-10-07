const mongoose = require("mongoose");

Workout.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      PlanName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guest: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      schedule: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cancelled: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        allowNull: false,
      },
    },
  );
  

module.exports = Workout;