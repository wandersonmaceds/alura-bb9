import { createConnection } from "typeorm";

export async function cleanupUsers(){
    await createConnection().then(c => c.query('DELETE FROM public.user'));
};