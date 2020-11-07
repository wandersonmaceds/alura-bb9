import { config } from 'dotenv';
config();

import server from './src/config/server.js';

server.listen(process.env.APP_PORT, () => {
    console.log(`Server is up on ${process.env.APP_PORT}`)
});