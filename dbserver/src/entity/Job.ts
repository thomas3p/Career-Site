import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Location } from './Location';
import { Team } from './Team';
import { Type } from './Type';
import { Qualification } from './Qualification';
import { Detail } from './Detail';
import { Responsibility } from './Responsibility';

@Entity('Job')
export class Job {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    title: string;

    @OneToMany(() => Qualification, qualification => qualification.job, { nullable: true })
    qualifications: Qualification[];

    @OneToMany(() => Detail, detail => detail.job, { nullable: true })
    details: Detail[];

    @OneToMany(() => Responsibility, responsibility => responsibility.job, { nullable: true })
    responsibilities: Responsibility[];

    @ManyToOne(() => Team, team => team.jobs, { nullable: true })
    team: Team;

    @ManyToOne(() => Location, location => location.jobs, { nullable: true })
    location: Location;

    @ManyToOne(() => Type, type => type.jobs, { nullable: true })
    type: Type;
}
