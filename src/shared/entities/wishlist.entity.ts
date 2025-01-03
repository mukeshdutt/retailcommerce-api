// Required Dependencies    
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

// Imported the User and Product entities
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

    // Relationships
    @OneToOne(() => User, (user) => user.userId)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(() => Product, (product) => product.productId)
    @JoinColumn({name: 'product_id'})
    product: Product
}