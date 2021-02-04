import User from "../../src/model/User.js";
import UserRepository from "../../src/repository/UserRepository";
import { PrismaClient } from '@prisma/client';

describe('UserRepository', () => {
    
    const prisma = new PrismaClient();

    beforeAll(async () => {
        await prisma.$connect();
    });

    afterEach(async () => {
        await prisma.user.deleteMany();
    });

    afterAll( async () => {
        await prisma.$disconnect();
    })

    test('save method saves a user', async () => {
        const user = new User('Jonilson', 'jonilson@host.com', 2332, ['monitor']);
        const result = await UserRepository.save(user);
        expect(result.id).toBeDefined();
    }); 

    test('list method list all users', async () => {
        const user = new User('Jonilson', 'jonilson@host.com', 2332, ['monitor']);
        await UserRepository.save(user);

        const users = await UserRepository.findAll();
        expect(users).toHaveLength(1);

        expect(users.pop()).toMatchObject({
            name: user.name,
            email: user.email,
            roles: user.roles,
            aluraId: user.aluraId
        })
    });
});