const cookies = (connection, Sequelize, abouts) => {
  return connection.define('cookies', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    aboutId: { type: Sequelize.INTEGER, primaryKey: true, references: { model: abouts, key: 'id' } },
  }, { paranoid: true })
}

module.exports = cookies
