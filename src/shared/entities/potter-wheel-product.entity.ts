import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Product } from "./product.entity"

@Entity('potter_wheel_product')
export class PotterWheelProduct {

    @PrimaryGeneratedColumn({name:"product_id"})
    productId: number;

    @Column({ name: 'material' })
    material: string;

    @Column({ name: 'wheel_type' })
    wheelType: string;

    @Column({ name: 'wheel_size' })
    wheelSize: string;

    // Relationships
    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}