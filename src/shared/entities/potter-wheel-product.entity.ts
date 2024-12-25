import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}