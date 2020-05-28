const models = require('../models')

const aboutCookiesByBatchSize = async (request, response) => {
  try {
    const { batchSize } = request.params

    const cookiesBatchSize = await models.abouts.findAll({
      where: { batchSize }
    })

    return cookiesBatchSize
      ? response.send(cookiesBatchSize)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookies by batchSize.')
  }
}

const aboutCookiesByType = async (request, response) => {
  try {
    const { type } = request.params

    const cookiesByType = await models.abouts.findAll({
      where: { type }
    })

    return cookiesByType
      ? response.send(cookiesByType)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookies by type.')
  }
}

module.exports = { aboutCookiesByBatchSize, aboutCookiesByType }
