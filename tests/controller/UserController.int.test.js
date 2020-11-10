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

    test('should return a array with greather than 1 size', async () => {

        const baseUser = {
            name: 'Lucas',
            email: 'lucas@alura.com.br',
            alura_id: 132,
            roles: 'monitor'
        }

        await request(app)
            .post('/user')
            .set('Content-Type', 'application/json')
            .send(baseUser)

        await request(app)
            .post('/user')
            .set('Content-Type', 'application/json')
            .send({...baseUser, alura_id: 125, email: 'lucas@caelum.com.br'})

        await request(app)
            .get('/user')
            .expect(200)
            .then(({ body }) => {
                expect(body.length).toBeGreaterThan(1)
            })
    })
})