const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/word-of-mouth', {logging: false})

module.exports = db
