// Required Dependencies
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

// Imported required entities
import { Product } from './product.entity';
import { Enquiry } from './enquiry.entity';

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

    // Relationships
    @ManyToOne(() => Product, (product) => product.productId)
    product: Product;

    @ManyToOne(() => Enquiry, (enquiry) => enquiry.enquiryId)
    enquiry: Enquiry;
}