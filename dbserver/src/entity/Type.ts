import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
// import { Tag } from './T/ag';
import { Job } from './Job';

@Entity('Type')
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    tag_name: string;

    @OneToMany(() => Job, job => job.type)
    jobs: Job[];
}
