import request from 'supertest';
import app from '../../src/config/server';
import { cleanupUsers } from '../util/database';

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