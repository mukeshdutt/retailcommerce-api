import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'terracotta_products' })
export class TerracottaProduct {

    @PrimaryGeneratedColumn({ name: 'product_id' })
    productId: number;

    @Column({ name: 'material' })
    material: string;

    @Column({ name: 'color' })
    color: string;

    @Column({ name: 'occasion' })
    occasion: string;

    @Column({ name: 'finish_type' })
    finishType: string;

    @Column({ name: 'diya_shape' })
    diyaShape: string;

    @Column({ name: 'quantity_per_pack' })
    quantityPerPack: number;

    @Column({ name: 'design' })
    design: string;

    @Column({ name: 'packaging_size' })
    packagingSize: string;

    @Column({ name: 'product_size' })
    productSize: string;

    @Column({ name: 'god_name' })
    godName: string;

    @Column({ name: 'usage_application' })
    usageApplication: string;

    // Relationships
    @OneToOne(() => Product)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}