import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Product } from "./product.entity"

@Entity('pot_products')
export class PotProduct {

    @PrimaryGeneratedColumn({name:"product_id"})
    productId: number;

    @Column({ name: 'product_size' })
    productSize: string;

    @Column({ name: 'color' })
    color: string;

    @Column({ name: 'usage_application' })
    usageApplication: string;

    @Column({ name: 'material' })
    material: string;

    @Column({ name: 'shape' })
    shape: string;

    @Column({ name: 'mount_type' })
    mountType: string;

    // Relationships
    @OneToOne(() => Product, (product) => product.productId)
    product: Product;
}