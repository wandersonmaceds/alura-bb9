const { User } = require('../../src/model/User');



describe('User', () => {
    test('a user with an empty name throws an error', () => {
        const newUser = () => new User('', 'jonilson@host.com', 4234, 'monitor');
        expect(newUser).toThrow('Nome não pode ser vazio');
    });

    test('a user with an empty email throws an error', () => {
        const newUser = () => new User('Jonilson', '', 4234, 'monitor');
        expect(newUser).toThrow('Email não pode ser vazio');
    });

    test('a user with an invalid role throws an error', () => {
        const newUser = () => new User('Jonilson', 'jonilson@host.com', 4234, 'forum');
        expect(newUser).toThrow('Perfil forum não existe');
    });

    test('a user with an invalid email throws an error', () => {
        const newUser = () => new User('Jonilson', 'jonilsonhost.com', 4234, 'forum');
        expect(newUser).toThrow('Email em formato inválido');
    });

    test('creates a valid user', () => {
        const user = new User('Fabiano', 'fabiano@host.com', 3443, 'monitor');
        expect(user).toMatchObject({
            name: 'Fabiano',
            email: 'fabiano@host.com',
            aluraId: 3443,
            roles: 'monitor'
        })
    })
});