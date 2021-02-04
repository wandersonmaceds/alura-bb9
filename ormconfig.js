export default {
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false, 
    migrations: ["src/schema/migrations/*.js"],
    cli: {
        migrationsDir: ["src/schema/migrations"]
    },
    entities: ["src/schema/*.schema.js"]
}