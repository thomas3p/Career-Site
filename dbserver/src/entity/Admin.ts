import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user: string

    @Column()
    password: string

}
