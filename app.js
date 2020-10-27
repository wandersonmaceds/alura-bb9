require('dotenv').config();

const express = require('express');
const Connection = require('./src/repository/Connection');
const { User } = require('./src/model/User');
const { options } = require('./src/repository/UserRepository');
const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
    const {name, email, alura_id, roles} = req.body;
    const user = new User(name, email, alura_id, roles);
    const conn = await Connection.getInstance();
    const result = await options.save(conn, user);
    res.send(`${result.id} created`);
})

const { PORT } = process.env;

app.listen(PORT, () => {  console.log(`Server is up on ${PORT}`) })