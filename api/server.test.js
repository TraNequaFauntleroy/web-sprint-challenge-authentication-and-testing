const server = require('./server')
const request = require('supertest')
const db = require('../data/dbConfig')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

test('sanity', () => {
  expect(true).toBe(true)
})

describe('[POST] /auth/register', () => {
  let res
  beforeEach(async () => {
    res = await request(server).post('/auth/register').send({ name: 'Mariana' })
  })
  it('responds with 201 CREATED', async () => {
    expect(res.status).toBe(201)
  })
  it('causes a user to be added to the db', async () => {
    const user = await db('users')
    expect(user).toHaveLength(3)
  })
  
})


