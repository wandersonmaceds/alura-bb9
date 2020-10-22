const { createConnection, EntitySchema } = require("typeorm");
const UserRepository = require('./UserRepository');

module.exports = { 
    getInstance: function () {
        return createConnection({
            type: 'postgres',
            url: 'postgres://wanderson@localhost/alura_bb9',
            synchronize: true,
            entities: [ 
                new EntitySchema(UserRepository)
             ]
        });
    }
}