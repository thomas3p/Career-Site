import { AppDataSource } from "./data-source"
import { Admin } from "./entity/Admin"
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
import 'reflect-metadata';
import { User } from "./entity/User";
import { Job } from "./entity/Job";

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
            const loginRepository = AppDataSource.getRepository(Admin);
            const userRepository = AppDataSource.getRepository(User);

            const login = await loginRepository.findOne({
                where: { username },
                relations: ['user']
            });

            if (login && password == login.password) {
                const token = jwt.sign({ id: login.user.id, username: login.username }, 'secret', { expiresIn: '1h' });
                console.log("ok");
                res.json({ token });
            } else {
                console.log("fail");
                
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error logging in' });
        }
    });

        // Create Job endpoint
        app.post('/jobs', async (req, res) => {
            const { title, qualifications, details, responsibility, teamId, locationId, typeId } = req.body;
            
            try {
                const jobRepository = AppDataSource.getRepository(Job);
    
                const job = new Job();
                job.title = title;
                job.qualifications = qualifications;
                job.details = details;
                job.responsibility = responsibility;
                job.team = teamId; // Assuming these are the foreign key values
                job.location = locationId;
                job.type = typeId;
    
                await jobRepository.save(job);
    
                res.status(201).json({ message: 'Job created successfully', job });
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Error creating job' });
            }
        });
    
        // Get Job List endpoint
        app.get('/jobs', async (req, res) => {
            try {
                const jobRepository = AppDataSource.getRepository(Job);
                const jobs = await jobRepository.find({
                    relations: ['team', 'location', 'type'],
                });
    
                res.json(jobs);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Error fetching job list' });
            }
        });
    
        // Get Job by ID endpoint
        app.get('/jobs/:id', async (req, res) => {
            const jobId = parseInt(req.params.id);
            if (isNaN(jobId)) {
                return res.status(400).json({ error: 'Invalid job ID' });
            }
    
            try {
                const jobRepository = AppDataSource.getRepository(Job);
                const job = await jobRepository.findOne({
                    where: {
                        id: jobId
                    }})
    
                if (!job) {
                    return res.status(404).json({ error: 'Job not found' });
                }
    
                res.json(job);
            } catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Error fetching job' });
            }
        });




    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
      });
      console.log("Data Source has been initialized!");
}).catch((error) => console.log(error));
  
