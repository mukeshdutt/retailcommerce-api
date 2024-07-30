// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';
// import { Category } from './category.entity';
// import { Subcategory } from './subcategory.entity';

// @Entity()
// export class Product {
//   @PrimaryGeneratedColumn()
//   productId: number;

//   @Column()
//   name: string;

//   @Column()
//   description: string;

//   @Column()
//   price: number;

//   @Column()
//   imageUrl: string;

//   @ManyToOne(() Category, Category => Category.)
//   @JoinColumn({ name: 'category_id' })
//   category: Category;

//   @ManyToOne(() => Subcategory)
//   subcategory: Subcategory;

//   @Column()
//   stockQuantity: number;

//   @Column()
//   createdAt: Date;

//   @Column()
//   updatedAt: Date;
// }
