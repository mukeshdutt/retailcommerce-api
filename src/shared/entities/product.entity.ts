import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from 'typeorm';

// Imported required entities
import { Category } from './category.entity';
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
  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({name: 'category_id'})
  category: Category;

  @OneToOne(() => ClayProduct, (clayProduct) => clayProduct.productId)
  @JoinColumn({name: 'product_id'})
  clayProduct: ClayProduct;

  @OneToOne(() => PotProduct, (potProduct) => potProduct.productId)
  @JoinColumn({name: 'product_id'})
  potProduct: PotProduct;

  @OneToOne(() => TerracottaProduct, (terracottaProduct) => terracottaProduct.productId)
  @JoinColumn({name: 'product_id'})
  terracottaProduct: TerracottaProduct;

  @OneToOne(() => PotterWheelProduct, (potterWheelProduct) => potterWheelProduct.productId)
  @JoinColumn({name: 'product_id'})
  potterWheelProduct: PotterWheelProduct;
}
