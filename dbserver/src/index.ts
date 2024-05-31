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
import { Team } from "./entity/Team";
import { Location } from "./entity/Location";
import { Type } from "./entity/Type";

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
        // Create Job endpoint
app.post('/jobs', async (req, res) => {
    const { title, qualifications, details, responsibility, teamId, locationId, typeId } = req.body;
    
    try {
        const jobRepository = AppDataSource.getRepository(Job);
        const teamRepository = AppDataSource.getRepository(Team);
        const locationRepository = AppDataSource.getRepository(Location);
        const typeRepository = AppDataSource.getRepository(Type);

        // Fetch team, location, and type entities
        const team = await teamRepository.findOne(teamId);
        const location = await locationRepository.findOne(locationId);
        const type = await typeRepository.findOne(typeId);

        // Create new job instance
        const job = new Job();
        job.title = title;

        // Assuming qualifications, details, and responsibilities are arrays of strings
        job.qualifications = qualifications.map(q => ({ description: q }));
        job.details = details.map(d => ({ description: d }));
        job.responsibilities = responsibility.map(r => ({ description: r }));

        // Assign team, location, and type
        job.team = team;
        job.location = location;
        job.type = type;

        // Save the job
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
                    relations: ['team', 'location', 'type','qualifications','details','responsibilities'],
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
            },
            relations: ['team', 'location', 'type', 'qualifications', 'details', 'responsibilities']
        })

        if (!job) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.json(job);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching job' });
    }
});
// Get Jobs by Team endpoint
app.get('/jobs/team/:teamId', async (req, res) => {
    const teamId = parseInt(req.params.teamId);
    if (isNaN(teamId)) {
        return res.status(400).json({ error: 'Invalid team ID' });
    }

    try {
        const jobRepository = AppDataSource.getRepository(Job);
        const jobs = await jobRepository.find({
            where: {
                team: { id: teamId }
            },
            relations: ['team', 'location', 'type', 'qualifications', 'details', 'responsibilities']
        });

        res.json(jobs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching jobs by team' });
    }
});





    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
      });
      console.log("Data Source has been initialized!");
}).catch((error) => console.log(error));
  
