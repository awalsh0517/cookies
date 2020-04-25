const cookies = require('../cookies')

// const getAllCookies = (request, response) => {
//   return response.render('cookies')
// }

// module.exports = { getAllCookies }

const saveNewCookie = (request, response) => {
  const {
    name, description, type, batchSize, tags
  } = request.body

  if (!name || !description || !type || !batchSize || !tags) {
    return response.status(400).send('Required information: name, description, type, batchSie, and tags.')
  }

  const newCookie = {
    name, description, type, batchSize, tags
  }

  cookies.push(newCookie)

  return response.status(201).send(newCookie)
}


module.exports = { saveNewCookie }
