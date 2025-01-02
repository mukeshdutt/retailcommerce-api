import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from 'typeorm';
import { Product } from './product.entity';

// Define the entity for the 'categories' table
@Entity({ name: 'categories' })
export class Category {
  
  @PrimaryGeneratedColumn({name:"category_id"})
  categoryId: number;

  @Column({name:"parent_id"})
  parentId: number;

  @Column({name:"category_name"})
  name: string;

  @Column({name:"description"})
  description: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column({name:"is_active"})
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
