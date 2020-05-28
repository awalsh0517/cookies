const models = require('../models')

const cookiesPage = async (request, response) => {
  const api = await models.cookies.findAll()

  return response.render('index', { api })
}

const getAllCookies = async (request, response) => {
  try {
    const allCookies = await models.cookies.findAll()

    return response.send(allCookies)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookies, please try again')
  }
}

const saveNewCookie = async (request, response) => {
  try {
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
  } catch (error) {
    return response.status(500).send('Unknown error when creating new cookie')
  }
}

const getCookieByNameWithaboutId = async (request, response) => {
  try {
    const { name } = request.params

    const cookieByNameaboutId = await models.cookies.findOne({
      include: [{
        model: models.abouts
      }],
      where: { name }
    })

    return cookieByNameaboutId
      ? response.send(cookieByNameaboutId)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve cookie, please try again')
  }
}

const patchCookieByName = async (request, response) => {
  const { id } = request.params

  const { name } = request.body

  const nameUpdate = await models.cookies.findOne({ where: { id } })

  if (!nameUpdate) return response.status(404).send('Unknown name')

  if (name) { await models.cookies.update({ name: name }, { where: { id: id } }) }

  return response.status(201).send('Successfully patched the name item')
}

const deleteCookieByName = async (request, response) => {
  try {
    const { name } = request.params
    const cookie = await models.cookies.findOne({ where: { name } })

    if (!cookie) return response.status(404).send(`Unknown cookie with name: ${name}`)

    await models.cookies.destroy({ where: { name } })

    return response.send(`Successfully deleted the cookie with the name: ${name}`)
  } catch (error) {
    return response.status(500).send('Unable to delete cookie, please try again')
  }
}

module.exports = {
  cookiesPage, getAllCookies, saveNewCookie, getCookieByNameWithaboutId, deleteCookieByName, patchCookieByName
}
