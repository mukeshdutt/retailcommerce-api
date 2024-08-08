import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shared/entities/product.entity';
import { Repository } from 'typeorm';
import { Equal } from 'typeorm';

export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }
  
  async getProductByCategorySubcategory(categoryId: number, subcategoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { category: Equal(categoryId), subcategory: Equal(subcategoryId) },
    });
  }
}
