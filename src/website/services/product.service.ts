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
  
  // Get all hot products
  async getHotProducts(): Promise<ProductViewModel[]> {
    const hotProducts = await this.productRepository.find({ where: { isHot: true } });
    return hotProducts.map((product) => {
      return new ProductViewModel(
        product.productId,
        product.name,
        product.description,
        product.imageUrl,
        product.brand,
        product.countryOfOrigin,
        product.categoryId
      );
    });
  }

  // Get all products by category id
  async getProductByCategoryId(categoryId: number): Promise<ProductViewModel[]> {
    const products = await this.productRepository.find({ where: { categoryId: Equal(categoryId) } });
    return products.map((product) => {
      return new ProductViewModel(
        product.productId,
        product.name,
        product.description,
        product.imageUrl,
        product.brand,
        product.countryOfOrigin,
        product.categoryId
      );
    });
  }

  // Get product details by product id
  async getProductDetailsById(productId: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId: Equal(productId) },
    });
  }
}
