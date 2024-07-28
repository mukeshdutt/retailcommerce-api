import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
import { Subcategory } from './subcategory.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    imageUrl: string;

    @ManyToOne(() => Category)
    category: Category;

    @ManyToOne(() => Subcategory)
    subcategory: Subcategory;

    @Column()
    stockQuantity: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}