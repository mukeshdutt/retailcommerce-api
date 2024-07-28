import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity("product_details")
export class ProductDetail {
    @Column({ name: 'product_id', primary: true })
    productId: number;

    @Column({ name: 'product_code' })
    productCode: string;

    @Column()
    manufacturer: string;

    @Column()
    weight: number;

    @Column()
    dimensions: string;

    @Column()
    color: string;

    @Column()
    material: string;

    @Column({ name: 'is_featured' })
    isFeatured: boolean;

    @Column({ name: 'is_active' })
    isActive: boolean;

    @Column({ name: 'release_date' })
    releaseDate: Date;

    @Column()
    tags: string;
}