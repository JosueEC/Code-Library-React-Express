const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
        notEmpty: true,
        isLowerCase: true,
        len: [2, 50]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [10, 200]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isUrl: true
      }
    },
    released: {
      type: DataTypes.DATEONLY,
      // defaultValue: getActualDate('yyyy-mm-dd'),
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
        len: [10]
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}

// function getActualDate (format) {
//   const date = new Date()
//   const map = {
//     dd: date.getDate() + 1,
//     mm: date.getMonth() + 1,
//     yy: date.getFullYear().toString().slice(-2),
//     yyyy: date.getFullYear()
//   }

//   return format.replace(/dd|mm|yyyy/gi, matched => map[matched])
// }
