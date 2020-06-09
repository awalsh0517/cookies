import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import {
  cookiesPage, getAllCookies, saveNewCookie, getCookieByNameWithaboutId, deleteCookieByName, patchCookieNameById
} from './controllers/cookies'
import { getCookiesByBatchSize, getCookiesByType } from './controllers/abouts'
import { getCookiesByTags } from './controllers/tags'

const app = express()

// app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', cookiesPage)

app.get('/api/cookies', getAllCookies)

app.use(bodyParser.json())

app.post('/api/cookies', bodyParser.json(), saveNewCookie)

app.get('/api/cookies/name/:name', getCookieByNameWithaboutId)

app.get('/api/cookies/batch/:batchSize', getCookiesByBatchSize)

app.get('/api/cookies/type/:type', getCookiesByType)

app.get('/api/cookies/tags/:tag', getCookiesByTags)

app.patch('/api/cookies/:id', patchCookieNameById)

app.delete('/api/cookies/name/:name', deleteCookieByName)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1990, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1990...')
})

