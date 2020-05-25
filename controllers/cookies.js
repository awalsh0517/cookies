// const cookies = require('../cookies')
const models = require('../models')

const cookiesPage = async (request, response) => {
  const api = await models.cookies.findAll()

  return response.render('index', { api })
}

const getAllCookies = async (request, response) => {
  const allCookies = await models.cookies.findAll()

  return response.send(allCookies)
}

const saveNewCookie = async (request, response) => {
  const {
    name, description, aboutId
  } = request.body

  if (!name || !description || !aboutId) {
    return response.status(400).send('Required information: name, description, type, batchSie, and tags.')
  }

  const newCookie = await models.cookies.create({
    name, description, aboutId
  })

  return response.status(201).send(newCookie)
}

const getCookieByNameWithaboutId = async (request, response) => {
  const { identifier } = request.params

  const cookieByNameaboutId = await models.cookies.findOne({
    include: [{
      model: models.abouts
    }],
    where: {
      name: { [models.Op.like]: `%${identifier}%` },
    }
  })

  return cookieByNameaboutId
    ? response.send(cookieByNameaboutId)
    : response.sendStatus(404)
}

const patchCookieByName = async (request, response) => {
  const { name } = request.params

  const patchByName = await models.cookies.findOne({
    where: { name }
  })

  return patchByName
    ? response.send(patchByName)
    : response.sendStatus(404)
}

const deleteCookieByName = async (request, response) => {
  const { name } = request.params
  const cookie = await models.cookies.findOne({ where: { name } })

  if (!cookie) return response.status(404).send(`Unknown cookie with name: ${name}`)

  await models.cookies.destroy({ where: { name } })

  return response.send(`Successfully deleted the cookie with the name ${name}`)
}

module.exports = {
  cookiesPage, getAllCookies, saveNewCookie, getCookieByNameWithaboutId, deleteCookieByName, patchCookieByName
}
