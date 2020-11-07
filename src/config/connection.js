import 'dotenv/config'
import { createConnection, EntitySchema } from "typeorm";
import UserSchema from '../schema/user.schema';

export default function getInstance(name) {
    return createConnection({
        name: name || 'default',
        type: 'postgres',
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        synchronize: true,
        entities: [
            new EntitySchema(UserSchema)
        ]
    });
}

