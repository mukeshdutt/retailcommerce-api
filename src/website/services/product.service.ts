// Imported required dependencies
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Equal } from 'typeorm';

// -- Entities & ViewModels
import { Product } from 'src/shared/entities/product.entity';
import { ProductViewModel } from '../viewmodels/product.viewmodel';

// Service class
export class ProductService {
  
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  
  async getProducts(): Promise<any> {
    const products = await this.productRepository.find({relations: ['category', 'subcategory']});
    return Any
  }
  
  async getProductByCategorySubcategory(categoryId: number, subcategoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { category: Equal(categoryId) },
    });
  }

  async getProductById(productId: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId: Equal(productId) },
    });
  }
}
