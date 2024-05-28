import { AppDataSource } from "./data-source"
import { Admin } from "./entity/Admin"
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
import 'reflect-metadata';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));

app.use(cors({
    origin: 'http://localhost:4200'
}));
const { PORT = 3000 } = process.env;

AppDataSource.initialize().then(async () => {

    console.log('Data Source has been initialized!');
    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        try {
            const loginRepository = AppDataSource.getRepository(Login);
            const userRepository = AppDataSource.getRepository(User);

            const login = await loginRepository.findOne({
                where: { username },
                relations: ['user']
            });

            if (login && await bcrypt.compare(password, login.password)) {
                const token = jwt.sign({ id: login.user.id, username: login.username }, 'secret', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error logging in' });
        }
    });
    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
      });
      console.log("Data Source has been initialized!");
}).catch((error) => console.log(error));
  
