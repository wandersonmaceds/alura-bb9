import { initializeConnection } from "../../src/config/connection.js";

export async function cleanupUsers(){
    await initializeConnection('test').then(async c => {
        await c.query('DELETE FROM public.user');
    })
};