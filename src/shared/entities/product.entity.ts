import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'products'})
export class Product {

  @PrimaryGeneratedColumn({ name: 'product_id' })
  productId: number;

  @Column({name:"category_id"})
  categoryId: number;

  @Column({name:"name"})
  name: string;

  @Column({name:"description"})
  description: string;

  @Column({name: 'image_url'})
  imageUrl: string;

  @Column({name:"brand"})
  brand: string;
  
  @Column({name:"country_of_origin"})
  countryOfOrigin: string;

  @Column({name:"is_hot"})
  isHot: boolean;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
