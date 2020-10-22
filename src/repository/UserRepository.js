module.exports = {
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