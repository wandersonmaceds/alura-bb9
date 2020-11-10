export default {
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
            notNull: true,
        },
        email: {
            type: 'varchar',
            notNull: true,
            unique: true,
        },
        aluraId: {
            type: 'int',
            notNull: true,
            unique: true,
            name: 'alura_id'
        },
        roles: {
            type: 'varchar',
            default: 'contributer'
        },
        isActive: {
            type: 'boolean',
            default: true,
            name: 'is_active'
        }
    }
}