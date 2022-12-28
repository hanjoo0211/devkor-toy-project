import { BaseEntity, Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Reviews extends BaseEntity {
    @PrimaryColumn()
    pid: number;

    @PrimaryColumn()
    uid: number;

    @Column({ type: 'decimal', precision: 2, scale: 1 })
    score: number;

    @Column({ type: 'varchar', length: 500 })
    content: string

    @UpdateDateColumn()
    date: Date;
}