import "reflect-metadata"
import { DataSource } from "typeorm"
import { Admin } from "./entity/Admin"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Admin,User],
    migrations: [],
    subscribers: [],
})
