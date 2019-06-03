const Sequelize = require('sequelize')
const db = require('./database')

module.exports = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
