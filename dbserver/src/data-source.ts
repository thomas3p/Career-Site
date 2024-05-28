import "reflect-metadata"
import { DataSource } from "typeorm"
import { Admin } from "./entity/Admin"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Admin],
    migrations: [],
    subscribers: [],
})
