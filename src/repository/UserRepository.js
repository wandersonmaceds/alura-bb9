const { User } = require("../model/User");

const schema = {
    name: 'User',
    tableName: 'user',
    columns: {
        id: {
            primary: true,
            type: 'int', 
            generated: true
        }, 
        name: {
            type: 'varchar',
            notNull: true
        },
        email: {
            type: 'varchar',
            notNull: true,
            unique: true,
        },
        alura_id: {
            type: 'int',
            notNull: true,
        },
        roles: {
            type: 'varchar',
            default: 'contributer'
        },
        is_active: {
            type: 'boolean',
            default: true,
        }
    }
}

const options = {
    save: function(connection, user) {
        return connection.getRepository('User').save(user);
    },
    list: function(connection) {
        return connection.getRepository('User').find();
    }, 
    findOne: function (connection, criteria) {
        return connection.getRepository('User').findOne(criteria).then(result => {
            const user =  new User(result.name, result.email, result.alura_id, result.roles, result.isActive)
            user.id = result.id;
            return user;
        });
    },
    update: function(connection, user) {
        return connection.getRepository('User').save(user);
    }
}


module.exports = { schema, options }