import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Job } from './Job';
// import { Tag } from './Tag';

@Entity('Team')
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    tag_name: string;

    @OneToMany(() => Job, job => job.team)
    jobs: Job[];
}
