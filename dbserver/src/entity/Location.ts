import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
// import { Tag } from './Tag';
import { Job } from './Job';

@Entity('Location')
export class Location {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    tag_name: string;

    @OneToMany(() => Job, job => job.location)
    jobs: Job[];
}
