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
        len: {
          args: [2, 50],
          msg: 'platform name must be between 2 and 50 characters in length.'
        },
        notEmpty: {
          msg: 'platform name cannot be empty.'
        },
        isLowercase: {
          msg: 'platform name must be lowercase.'
        }
      }
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
}
