import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { ClayProduct } from './clay-product.entity';
import { PotProduct } from './pot-product.entity';
import { TerracottaProduct } from './terracotta-product.entity';
import { PotterWheelProduct } from './potter-wheel-product.entity';

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

  // Relationships
  @OneToOne(() => ClayProduct)
  @JoinColumn({name: 'product_id'})
  clayProduct: ClayProduct;

  @OneToOne(() => PotProduct)
  @JoinColumn({name: 'product_id'})
  potProduct: PotProduct;

  @OneToOne(() => TerracottaProduct)
  @JoinColumn({name: 'product_id'})
  terracottaProduct: TerracottaProduct;

  @OneToOne(() => PotterWheelProduct)
  @JoinColumn({name: 'product_id'})
  potterWheelProduct: PotterWheelProduct;
}
