import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from 'typeorm';
import { Subcategory } from './subcategory.entity';
import { Product } from './product.entity';

// Define the entity for the 'categories' table
@Entity({ name: 'categories' })
export class Category {
  
  @PrimaryGeneratedColumn({name:"category_id"})
  categoryId: number;

  @Column()
  name: string;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @Column()
  description: string;

  @Column({name:"is_active"})
  isActive: boolean;

  @Column({name:"created_by"})
  createdBy: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({name:"updated_by"})
  updatedBy: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories: Subcategory[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
