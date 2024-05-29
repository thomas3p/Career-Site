import "reflect-metadata"
import { DataSource } from "typeorm"
import { Admin } from "./entity/Admin"
import { User } from "./entity/User"
import { Job } from "./entity/Job"
import { Team } from "./entity/Team"
import { Location } from "./entity/Location"
import { Type } from "./entity/Type"
// import { Tag } from "./entity/Tag"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Admin, Job, Team, Location, Type],
    migrations: [],
    subscribers: [],
})
