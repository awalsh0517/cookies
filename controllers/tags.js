const models = require('../models')

const getCookiesByTags = async (request, response) => {
  const { identifier } = request.params

  const cookiesByTag = await models.tags.findAll({
    include: [{
      model: models.cookies
    }],
    where: { tag: { [models.Op.like]: `%${identifier}%` } },
  })

  return cookiesByTag
    ? response.send(cookiesByTag)
    : response.sendStatus(404)
}

module.exports = { getCookiesByTags }
