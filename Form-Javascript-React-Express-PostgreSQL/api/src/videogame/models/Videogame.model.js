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
        notEmpty: {
          msg: 'video game name cannot be empty.'
        },
        isLowercase: {
          msg: 'video game name must be lowercase.'
        },
        len: {
          args: [2, 50],
          msg: 'video game name must be between 2 and 50 characters.'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'game description cannot be empty.'
        },
        len: {
          args: [10, 200],
          msg: 'game description must be between 10 and 200 characters.'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'image URL cannot be empty.'
        },
        isUrl: {
          msg: 'invalid URL format, must be an image URL.'
        }
      }
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'release date game cannot be empty.'
        },
        isDate: {
          msg: 'release date format must be YYYY-MM-DD.'
        },
        len: {
          args: [10],
          msg: 'release date game must be less than 11 characters.'
        }
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
}
