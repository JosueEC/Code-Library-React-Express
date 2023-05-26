const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('platform', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 50],
        notEmpty: true,
        isLowercase: true
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
