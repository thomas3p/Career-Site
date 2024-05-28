import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Job {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sad: string

    @Column()
    password: string

}
