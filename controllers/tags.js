import models from '../models'

export const getCookiesByTags = async (request, response) => {
  try {
    const { tag } = request.params

    const cookiesByTag = await models.tags.findAll({
      include: [{
        model: models.cookies
      }],
      where: { tag },
    })

    return cookiesByTag
      ? response.send(cookiesByTag)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookie by tag, please try again.')
  }
}
