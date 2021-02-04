import { EntitySchema } from "typeorm"
import { Roles, allowedRoles } from "../model/Roles";

export default new EntitySchema({
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
            type: 'enum',
            array: true,
            enum: allowedRoles(),
            default: [Roles.CONTRIBUTER]
        },
        isActive: {
            type: 'boolean',
            default: true,
            name: 'is_active'
        },
        extraContactOptions: {
            type: 'json',
            default: '{}',
            name: 'extra_contact_options'
        }
    }
})