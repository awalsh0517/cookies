import models from '../models'

export const getCookiesByBatchSize = async (request, response) => {
  try {
    const { batchSize } = request.params

    const cookiesBatchSize = await models.abouts.findAll({
      include: [{
        model: models.cookies
      }],
      where: { batchSize }
    })

    return cookiesBatchSize
      ? response.send(cookiesBatchSize)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookies by batchSize.')
  }
}

export const getCookiesByType = async (request, response) => {
  try {
    const { type } = request.params

    const cookiesByType = await models.abouts.findAll({
      include: [{
        model: models.cookies
      }],
      where: { type }
    })

    return cookiesByType
      ? response.send(cookiesByType)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookies by type.')
  }
}
