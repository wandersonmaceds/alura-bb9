const Connection = require("../../src/repository/Connection")

module.exports = {
    cleanupUsers: async () => {
        await Connection.getInstance('test').then(async c => {
            await c.query('DELETE FROM public.user');
        })
    }
}