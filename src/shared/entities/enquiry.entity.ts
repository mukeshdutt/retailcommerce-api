import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('enquiries')
export class Enquiry {

    @PrimaryGeneratedColumn({name: 'enquiry_id'})
    enquiryId: number;

    @Column({name: 'user_id'})
    userId: number;

    @Column('text', {name: 'remarks'})
    remark: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}