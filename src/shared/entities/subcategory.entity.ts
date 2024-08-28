import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';

@Entity({ name: 'subcategories' })
export class Subcategory {

  @PrimaryGeneratedColumn({name:"subcategory_id"})
  subcategoryId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.subcategories)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Product, (product) => product.subcategory) 
  products: Product[];
}
