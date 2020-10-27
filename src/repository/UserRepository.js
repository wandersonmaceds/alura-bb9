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
    }
}

const options = {
    save: function(connection, user) {
        return connection.getRepository('User').save(user);
    },
    list: function(connection) {
        return connection.getRepository('User').find();
    }
}


module.exports = { schema, options }