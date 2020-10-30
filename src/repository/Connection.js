
const { createConnection, EntitySchema } = require("typeorm");
const UserRepository = require('./UserRepository').schema;

module.exports = { 
    getInstance: function (name) {
        return createConnection({
            name: name || 'default',
            type: 'postgres',
            url: process.env.DATABASE_URL,
            synchronize: true,
            entities: [ 
                new EntitySchema(UserRepository)
             ]
        });
    }
}