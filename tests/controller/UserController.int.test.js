    const request = require('supertest');
const { app } = require('../../app');
const { cleanupUsers } = require('../util/database');

describe('UserController', () => {

    beforeAll(async () => {
        await cleanupUsers();
    });

    test('valid user is created', async () => {
        await request(app)
            .post('/user')
            .send({ name: 'Joka', email: 'joka@host.com', alura_id: 222, roles: 'monitor' })
            .set('Content-Type', 'application/json')
            .expect(201);
    });
})