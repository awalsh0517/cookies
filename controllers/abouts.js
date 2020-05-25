const models = require('../models')

const aboutCookiesByBatchSize = async (request, response) => {
  const { identifier } = request.params

  const batchSize = await models.abouts.findAll({
    where: { batchSize: { [models.Op.like]: `%${identifier}%` } },
  })

  return batchSize
    ? response.send(batchSize)
    : response.sendStatus(404)
}

const aboutCookiesByType = async (request, response) => {
  const { identifier } = request.params

  const cookiesByType = await models.abouts.findAll({
    where: { type: { [models.Op.like]: `%${identifier}%` } },
  })

  return cookiesByType
    ? response.send(cookiesByType)
    : response.sendStatus(404)
}

module.exports = { aboutCookiesByBatchSize, aboutCookiesByType }
