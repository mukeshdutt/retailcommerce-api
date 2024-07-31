import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Category } from './category.entity';

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

  @ManyToOne(() => Category, (category) => category.categoryId)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
