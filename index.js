const express = require('express')
// const cookies = require('./cookies')
const bodyParser = require('body-parser')
const {
  cookiesPage, getAllCookies, saveNewCookie, getCookieByNameWithaboutId, deleteCookieByName, patchCookieByName
} = require('./controllers/cookies')
const { aboutCookiesByBatchSize, aboutCookiesByType } = require('./controllers/abouts')
const { getCookiesByTags } = require('./controllers/tags')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api', cookiesPage)

app.get('/api/allCookies', getAllCookies)

app.use(bodyParser.json())

app.post('/api/allCookies', bodyParser.json(), saveNewCookie)

app.get('/api/cookiesByName/:identifier', getCookieByNameWithaboutId)

app.get('/api/cookiesByBatchSize/:identifier', aboutCookiesByBatchSize)

app.get('/api/CookiesByType/:identifier', aboutCookiesByType)

app.get('/api/cookiesByTags/:identifier', getCookiesByTags)

app.patch('/api/cookiesByName/:name', patchCookieByName)

app.delete('/api/cookiesByName/:name', deleteCookieByName)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1990, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1990...')
})

