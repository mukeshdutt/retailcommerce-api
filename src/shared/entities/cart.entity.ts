// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { User } from './user.entity';
// import { Product } from './product.entity';

// @Entity({ name: 'carts' })
// export class Cart {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ name: 'cart_id' })
//   cartId: string;

//   @ManyToOne(() => User, user => user.userId)
//   user: User;

//   @ManyToOne(() => Product, product => product.productId)
//   product: Product;

//   @Column()
//   quantity: number;

//   @Column({ name: 'date_added' })
//   dateAdded: Date;

//   @Column({ name: 'is_saved_for_later' })
//   isSavedForLater: boolean;
// }
