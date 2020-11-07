import express from 'express';
import getInstance from "../config/connection.js";
import User from "../model/User.js";
import UserRepository from "../repository/UserRepository.js";
const app = express();

app.use(express.json());

app.post('/user', async (req, res) => {
    let statusCode = 201;
    const { name, email, alura_id, roles, is_active = true } = req.body;
    const conn = await getInstance();
    const userA = await UserRepository.findOne(conn, { email });

    console.log(userA);

    if(userA) {
        userA.toggleSubscription();
        await UserRepository.update(conn, userA);
        statusCode = 200;
    } else {
        const user = new User(name, email, alura_id, roles, is_active);
        try {
            await UserRepository.save(conn, user);
        } catch(error) {
            console.log(error);
            statusCode = 400;
        }
    }
    await conn.close();
    res.sendStatus(statusCode);
});

export default app;