'use strict';

const base64 = require('base-64');

const { server } = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Auth Routes', () => {
  it('Can create a new user with /signup', () => {
    const body = {"username": 'testuser', "password": "testpassword"};
    mockRequest.post('/signup').send(body)
      .then(response => {
        expect(response.body.username).toEqual(body.username);
      });
  });

  it('Can login with a user that has already signed up', () => {
    const body = {"username": 'testuser', "password": "testpassword"};

    mockRequest.post('/signup').send(body)
      .then(signupResponse => {
        mockRequest.post('/signin').auth(body.username, body.password)
        // auth method found on stackoverflow https://stackoverflow.com/questions/28756543/setting-basic-auth-in-mocha-and-supertest
          .then(signinResponse =>
            expect(signinResponse.body.username).toEqual(body.username)
          );
      });
  });
});