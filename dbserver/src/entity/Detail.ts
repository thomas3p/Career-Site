import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Job } from './Job';

@Entity()
export class Detail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => Job, job => job.details)
    job: Job;
}
