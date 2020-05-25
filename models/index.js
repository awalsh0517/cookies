const Sequelize = require('sequelize')
const aboutsModel = require('./abouts')
const cookiesModel = require('./cookies')
const cookiesTagsModel = require('./cookiesTags')
const tagsModel = require('./tags')

const connection = new Sequelize('cookiesApi', 'cookies', 'C0ok!#$', {
  host: 'localhost', dialect: 'mysql'
})

const abouts = aboutsModel(connection, Sequelize)
const cookies = cookiesModel(connection, Sequelize)
const cookiesTags = cookiesTagsModel(connection, Sequelize)
const tags = tagsModel(connection, Sequelize)

cookies.belongsToMany(tags, { through: 'cookiesTags', foreignKey: 'cookieId' })
tags.belongsToMany(cookies, { through: 'cookiesTags', foreignKey: 'tagsId' })

cookies.belongsTo(abouts)
abouts.hasMany(cookies)




module.exports = {
  Op: Sequelize.Op,
  abouts,
  cookies,
  cookiesTags,
  tags,
}
