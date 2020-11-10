import 'dotenv/config'
import { createConnection, EntitySchema } from "typeorm";
import UserSchema from '../schema/user.schema';

const options = {
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    entities: [
        new EntitySchema(UserSchema)
    ]
}

export function initializeConnection(name){
    return createConnection({
        ...options,
        name
    });
}

export default ( () => createConnection(options))();
