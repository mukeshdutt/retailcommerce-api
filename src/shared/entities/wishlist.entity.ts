import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    wishlistId: number;

    @ManyToOne(() => User, user => user.wishlists)
    user: User;

    @ManyToOne(() => Product, product => product.wishlists)
    product: Product;

    @Column()
    priority: number;

    @Column()
    notes: string;
}