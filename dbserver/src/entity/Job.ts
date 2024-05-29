import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from './Location';
import { Team } from './Team';
import { Type } from './Type';

@Entity('Job')
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    title: string;

    @Column({ type: 'text', nullable: true })
    qualifications: string;

    @Column({ type: 'text', nullable: true })
    details: string;

    @Column({ type: 'text', nullable: true })
    responsibility: string;

    @ManyToOne(() => Team, team => team.jobs, { nullable: true })
    team: Team;

    @ManyToOne(() => Location, location => location.jobs, { nullable: true })
    location: Location;

    @ManyToOne(() => Type, type => type.jobs, { nullable: true })
    type: Type;
}
