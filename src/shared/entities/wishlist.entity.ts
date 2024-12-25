import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity('wishlist')
export class Wishlist {

    @PrimaryGeneratedColumn({name:"wishlist_id"})
    wishlistId: number;

    @Column({name:"user_id"})
    userId: number;

    @Column({name:"product_id"})
    productId: number;

    @Column({name:"priority"})
    priority: number;

    @Column({name:"notes"})
    notes: string;
}