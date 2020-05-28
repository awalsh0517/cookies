/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { afterEach, beforeEach, describe, it } = require('mocha')
const { cookiesList, singleCookie, cookiesBatchSize, tagsList } = require('../mocks/cookies')
const { getAllCookies, saveNewCookie, getCookieByNameWithaboutId, deleteCookieByName } = require('../../controllers/cookies')
const { aboutCookiesByBatchSize, aboutCookiesByType } = require('../../controllers/abouts')
const { getCookiesByTags } = require('../../controllers/tags')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - cookies', () => {
  let sandbox
  let stubbedFindOne
  let stubbedFindAll
  let stubbedCreate
  let stubbedDestroy
  let stubbedAboutsFindAll
  let stubbedTagsFindAll
  let response
  let stubbedStatusSend

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    stubbedStatusSend = sandbox.stub()

    response = {
      send: sandbox.stub(),
      status: sandbox.stub().returns({ send: stubbedStatusSend }),
      sendStatus: sandbox.stub(),
    }

    stubbedFindOne = sandbox.stub(models.cookies, 'findOne')
    stubbedFindAll = sandbox.stub(models.cookies, 'findAll')
    stubbedCreate = sandbox.stub(models.cookies, 'create')
    stubbedDestroy = sandbox.stub(models.cookies, 'destroy')

    stubbedAboutsFindAll = sandbox.stub(models.abouts, 'findAll')

    stubbedTagsFindAll = sandbox.stub(models.tags, 'findAll')
  })

  afterEach(() => {
    sandbox.reset()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('getAllCookies', () => {
    it('retrieves a list of all cookies from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(cookiesList)

      await getAllCookies({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(response.send).to.have.been.calledWith(cookiesList)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllCookies({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve cookies, please try again')
    })
  })

  describe('saveNewCookie', () => {
    it('accepts new hero details and saves them as a new cookie, returning the saved record with a 201 status', async () => {
      const request = { body: { name: 'snickerdoodle', description: 'Soft and chewy cookie coated in cinnamon sugar.', aboutId: 4 } }

      stubbedCreate.returns(singleCookie)

      await saveNewCookie(request, response)

      expect(stubbedCreate).to.have.been.calledWith({ name: 'snickerdoodle', description: 'Soft and chewy cookie coated in cinnamon sugar.', aboutId: 4 })
      expect(response.status).to.have.been.calledWith(201)
      expect(stubbedStatusSend).to.have.been.calledWith(singleCookie)
    })

    it('returns a 400 when a new cookie cannot be saved because of missing data', async () => {
      const request = { body: { name: 'not-found' } }

      await saveNewCookie(request, response)

      expect(stubbedCreate).to.have.been.callCount(0)
      expect(response.status).to.have.been.calledWith(400)
      expect(stubbedStatusSend).to.have.been.calledWith('Required information: name, description, type, batchSie, and tags.')
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedCreate.throws('ERROR')

      const request = { body: { name: 'snickerdoodle', description: 'Soft and chewy cookie coated in cinnamon sugar.', aboutId: 4 } }

      await saveNewCookie(request, response)

      expect(stubbedCreate).to.have.been.calledWith({ name: 'snickerdoodle', description: 'Soft and chewy cookie coated in cinnamon sugar.', aboutId: 4 })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unknown error when creating new cookie')
    })
  })

  describe('getCookieByNameWithaboutId', () => {
    it('retrieves a cookie by name and the corresponding aboutId and calls response.send() with that cookie', async () => {
      stubbedFindOne.returns(singleCookie)
      const request = { params: { name: 'snickerdoodle' } }

      await getCookieByNameWithaboutId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        include: [{ model: models.abouts }],
        where: { name: 'snickerdoodle' }
      })
      expect(response.send).to.have.been.calledWith(singleCookie)
    })

    it('returns a 404 when no cookie is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { name: 'not-found' } }

      await getCookieByNameWithaboutId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({
        include: [{ model: models.abouts }],
        where: { name: 'not-found' }
      })
      expect(response.sendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR')
      const request = { params: { name: 'snickerdoodle' } }

      await getCookieByNameWithaboutId(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ include: [{ model: models.abouts }], where: { name: 'snickerdoodle' }, })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve cookie, please try again')
    })
  })

  describe('deleteCookieByName', () => {
    it('responds with a success message when the cookie is deleted', async () => {
      stubbedFindOne.returns(singleCookie)
      const request = { params: { name: 'snickerdoodle' } }

      await deleteCookieByName(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: 'snickerdoodle' } })
      expect(stubbedDestroy).to.have.been.calledWith({ where: { name: 'snickerdoodle' } })
      expect(response.send).to.have.been.calledWith('Successfully deleted the cookie with the name: snickerdoodle')
    })

    it('responds with a 404 when no cookie can be found with the name passed in', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { name: 'not-found' } }

      await deleteCookieByName(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: 'not-found' } })
      expect(stubbedDestroy).to.have.callCount(0)
      expect(response.status).to.have.been.calledWith(404)
      expect(stubbedStatusSend).to.have.been.calledWith('Unknown cookie with name: not-found')
    })

    it('returns a 500 error when the database calls fails', async () => {
      stubbedFindOne.returns(singleCookie)
      stubbedDestroy.throws('ERROR!')

      const request = { params: { name: 'snickerdoodle' } }

      await deleteCookieByName(request, response)

      expect(stubbedDestroy).to.have.been.been.calledWith({
        where: { name: 'snickerdoodle' }
      })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to delete cookie, please try again')
    })
  })

  describe('aboutCookiesByBatchSize', () => {
    it('returns a list of cookies by the searched batchSize and calls response.send with that list', async () => {
      stubbedAboutsFindAll.returns(cookiesBatchSize)
      const request = { params: { batchSize: '3 dozen' } }

      await aboutCookiesByBatchSize(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { batchSize: '3 dozen' } })
      expect(response.send).to.have.been.calledWith(cookiesBatchSize)
    })

    it('returns a 404 when no batchSize is found', async () => {
      stubbedAboutsFindAll.returns(null)
      const request = { params: { batchSize: '7 dozen' } }

      await aboutCookiesByBatchSize(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { batchSize: '7 dozen' } })
      expect(response.sendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 error when database call fails', async () => {
      stubbedAboutsFindAll.throws('ERROR')
      const request = { params: { batchSize: 'throw-error' } }

      await aboutCookiesByBatchSize(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { batchSize: 'throw-error' } })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve cookies by batchSize.')
    })
  })

  describe('aboutCookiesByType', () => {
    it('returns a list of cookies by the searched type and calls response.send with that list', async () => {
      stubbedAboutsFindAll.returns(cookiesBatchSize)
      const request = { params: { type: 'drop' } }

      await aboutCookiesByType(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { type: 'drop' } })
      expect(response.send).to.have.been.calledWith(cookiesBatchSize)
    })

    it('returns a 404 when no matching type is found', async () => {
      stubbedAboutsFindAll.returns(null)
      const request = { params: { type: 'square' } }

      await aboutCookiesByType(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { type: 'square' } })
      expect(response.sendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 error when database call fails', async () => {
      stubbedAboutsFindAll.throws('ERROR')
      const request = { params: { type: 'throw-error' } }

      await aboutCookiesByType(request, response)

      expect(stubbedAboutsFindAll).to.have.been.calledWith({ where: { type: 'throw-error' } })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve cookies by type.')
    })
  })

  describe('getCookiesByTags', () => {
    it('returns a list of cookies by the searched tag', async () => {
      stubbedTagsFindAll.returns(tagsList)
      const request = { params: { tag: 'wheat' } }

      await getCookiesByTags(request, response)

      expect(stubbedTagsFindAll).to.have.been.calledWith({ include: [{ model: models.cookies }], where: { tag: 'wheat' } })
      expect(response.send).to.have.been.calledWith(tagsList)
    })

    it('returns a 404 when no cookie is found with the searched tag', async () => {
      stubbedTagsFindAll.returns(null)
      const request = { params: { tag: 'blue' } }

      await getCookiesByTags(request, response)

      expect(stubbedTagsFindAll).to.have.been.calledWith({ include: [{ model: models.cookies }], where: { tag: 'blue' } })
      expect(response.sendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 error when database call fails', async () => {
      stubbedTagsFindAll.throws('ERROR')
      const request = { params: { tag: 'wheat' } }

      await getCookiesByTags(request, response)

      expect(stubbedTagsFindAll).to.have.been.calledWith({ include: [{ model: models.cookies }], where: { tag: 'wheat' }, })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve cookie by tag, please try again.')
    })
  })
})
