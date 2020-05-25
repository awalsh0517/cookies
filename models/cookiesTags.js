const cookiesTags = (connection, Sequelize, cookies, tags) => {
  return connection.define('cookiesTags', {
    cookieId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: cookies, key: 'id' } },
    tagsId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: tags, key: 'id' } }
  }, { paranoid: true })
}

module.exports = cookiesTags
