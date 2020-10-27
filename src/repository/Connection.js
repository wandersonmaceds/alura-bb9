
const { createConnection, EntitySchema } = require("typeorm");
const UserRepository = require('./UserRepository').schema;

module.exports = { 
    getInstance: function () {
        return createConnection({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            synchronize: true,
            entities: [ 
                new EntitySchema(UserRepository)
             ]
        });
    }
}