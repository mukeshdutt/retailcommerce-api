import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn} from 'typeorm';
import { Subcategory } from './subcategory.entity';
import { Product } from './product.entity';

// Define the entity for the 'categories' table
@Entity({ name: 'categories' })
export class Category {
  
  // Primary key column
  @PrimaryGeneratedColumn({name:"category_id"})
  categoryId: number;

  // Name column
  @Column()
  name: string;

  // Image URL column
  @Column({ name: 'image_url' })
  imageUrl: string;

  // Description column
  @Column()
  description: string;

  // Created at column
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Updated at column
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories: Subcategory[];

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
