const request = require('supertest');

import { Spikenail } from 'spikenail'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

beforeAll(async () => {
  return await Spikenail.start();
});

test('should respond on __schema query', async () => {

  let query = `{
    __schema {
      types {
        name
      }
    }
  }`;

  let res = await request(Spikenail.server)
    .post('/graphql')
    .send({ query: query })
    .expect('Content-Type', /json/)
    .expect(200);

  let data = JSON.parse(res.text);
  expect(data.data['__schema'].types.length).not.toBe(0);
});