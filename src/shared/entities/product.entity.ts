import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Category } from './category.entity';
import { Subcategory } from './subcategory.entity';

@Entity({name: 'products'})
export class Product {

  @PrimaryGeneratedColumn({ name: 'product_id' })
  productId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({name: 'image_url'})
  imageUrl: string;

  @Column({name: 'stock_quantity'})
  stockQuantity: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @ManyToOne(() => Category, (Category) => Category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Subcategory, (Subcategory) => Subcategory.products)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: Subcategory;
}
