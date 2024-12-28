import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity({ name: 'cart' })
export class Cart {
  
  @PrimaryGeneratedColumn({name: 'cart_id'})
  cartId: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({ name: 'added_at' })
  added_at: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.userId)
  user: User;

  @ManyToOne(() => Product, (product) => product.productId)
  product: Product;
}
