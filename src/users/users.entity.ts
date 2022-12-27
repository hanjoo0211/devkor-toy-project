import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20, unique: true })
    username: string

    @Column({ type: 'varchar', length: 20 })
    password: string;
}