import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity({ name: 'subcategory' })
export class Subcategory {
  @PrimaryGeneratedColumn()
  subcategoryId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
