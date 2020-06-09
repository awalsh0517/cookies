export default (connection, Sequelize) => {
  return connection.define('tags', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    tag: { type: Sequelize.STRING },
  }, { paranoid: true })
}
