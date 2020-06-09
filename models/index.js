import Sequelize from 'sequelize'
import aboutsModel from './abouts'
import cookiesModel from './cookies'
import cookiesTagsModel from './cookiesTags'
import tagsModel from './tags'

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




export default {
  Op: Sequelize.Op,
  abouts,
  cookies,
  cookiesTags,
  tags,
}
