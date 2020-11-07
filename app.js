require('dotenv').config();

const express = require('express');
const Connection = require('./src/repository/Connection');
const { User } = require('./src/model/User');
const { options } = require('./src/repository/UserRepository');
const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
    let statusCode = 201;
    const { name, email, alura_id, roles, is_active = true } = req.body;
    const conn = await Connection.getInstance();
    const userA = await options.findOne(conn, { email });
    
    console.log(userA);

    if(userA) {
        userA.toggleSubscription();
        await options.update(conn, userA);
        statusCode = 200;
    } else {
        const user = new User(name, email, alura_id, roles, is_active);
        try {
            await options.save(conn, user);
        } catch(error) {
            console.log(error);
            statusCode = 400;    
        }
    } 
    await conn.close();
    res.sendStatus(statusCode);
});
    
    
    
const { PORT } = process.env;

app.listen(PORT, () => {  /* console.log(`Server is up on ${PORT}`) */ });

module.exports = { app };