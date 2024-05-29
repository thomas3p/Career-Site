import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Job } from './Job';

@Entity()
export class Qualification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => Job, job => job.qualifications)
    job: Job;
}
