import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity("price")
export class Price {

    @PrimaryGeneratedColumn({name: 'price_id'})
    priceId: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column('decimal', { precision: 10, scale: 2, name: 'price' })
    price: number;

    @Column('decimal', { precision: 10, scale: 2, name: 'discount' })
    discount: number;

    // Relationships
    @OneToOne(() => Product, (product) => product.productId)
    product: Product
}