import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { EnquiryItem } from './enquiry-item.entity';

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

    // Relationships
    @OneToMany(() => EnquiryItem, (enquiryItem) => enquiryItem.enquiry)
    enquiryItems: EnquiryItem[];

}