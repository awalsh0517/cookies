const express = require('express')
const cookies = require('./cookies')
const bodyParser = require('body-parser')
const { saveNewCookie } = require('./controllers/cookies')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.listen(1990, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1990...')
})

app.get('/', (request, response) => {
  return response.render('index', { cookies })
})

app.get('/cookies', (request, response) => {
  return response.send(cookies)
})

app.use(bodyParser.json())

app.post('/cookies', saveNewCookie)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

