const Connection = require("../../src/repository/Connection");
const { User } =  require('../../src/model/User');
const { options }  = require('../../src/repository/UserRepository');

describe('UserRepository', () => {
    let connection = null;

    beforeEach(async () => {
        connection = await Connection.getInstance();
    });

    afterEach(async () => {
        await connection.query("DELETE FROM public.user");
        await connection.close();
        
    });

    test('save method saves a user', async () => {
        const user = new User('Jonilson', 'jonilson@host.com', 2332, 'monitor');
        const result = await options.save(connection, user);
        expect(result.id).toBeDefined();
    }); 

    test('list method list all users', async () => {
        const user = new User('Jonilson', 'jonilson@host.com', 2332, 'monitor');
        await options.save(connection, user);

        const users = await options.list(connection);
        expect(users).toHaveLength(1);
        expect(users.pop()).toMatchObject({
            name: user.name,
            email: user.email,
            roles: user.roles,
            alura_id: user.alura_id,
        })
    });
});