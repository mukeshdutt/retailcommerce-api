import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('enquiry_items')
export class EnquiryItem {
    
    @PrimaryGeneratedColumn({name: 'enquiry_item_id'})
    enquiry_item_id: number;

    @Column({name: 'enquiry_id'})
    enquiry_id: number;

    @Column({name: 'product_id'})
    product_id: number;

    @Column({name: 'quantity'})
    quantity: number;
}