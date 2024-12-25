import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('clay_products')
export class ClayProduct {

    @PrimaryGeneratedColumn({name:"product_id"})
    productId: number;

    @Column({ name: 'color' })
    color: string;

    @Column({ name: 'clay_state' })
    clayState: string;

    @Column({ name: 'grade' })
    grade: string;

    @Column({ name: 'packaging_size' })
    packagingSize: string;

    @Column({ name: 'packaging_type' })
    packagingType: string;

    @Column({ name: 'clay_weight' })
    clayWeight: string;

    @Column({ name: 'place_of_origin' })
    placeOfOrigin: string;

    @Column({ name: 'design_type' })
    designType: string;

    @Column({ name: 'product_type' })
    productType: string;
}