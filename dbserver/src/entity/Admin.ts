import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User";


@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string
    
    @ManyToOne(() => Admin, user => user.user)
    @JoinColumn({ name: 'user_id' })
    user: User;

}
