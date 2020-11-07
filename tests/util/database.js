import getInstance from "../../src/config/connection.js";

export async function cleanupUsers(){
    await getInstance('test').then(async c => {
        await c.query('DELETE FROM public.user');
    })
};