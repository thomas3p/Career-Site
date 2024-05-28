import { AppDataSource } from "./data-source"
import { Admin } from "./entity/Admin"
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jw=require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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


    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
      });
      console.log("Data Source has been initialized!");
}).catch((error) => console.log(error));
  
