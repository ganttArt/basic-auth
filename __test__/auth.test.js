'use strict';

const { server } = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Auth Routes', () => {
  it('Can create a new user with /signup', () => {
    const body = {"username": 'testuser1', "password": "testpw1"};
    mockRequest.post('/signup').send(body)
      .then(response => {
        expect(response.body.username).toEqual(body.username);
      });
  });
});