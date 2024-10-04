import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shared/entities/product.entity';
import { Repository } from 'typeorm';
import { Equal } from 'typeorm';
import { ProductViewModel } from '../viewmodels/product.viewmodel';

export class ProductService {
  
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  
  async getProducts(): Promise<ProductViewModel[]> {
    const products = await this.productRepository.find({relations: ['category', 'subcategory']});
    return products.map(product => new ProductViewModel(
      product.productId,
      product.name,
      product.description,
      product.specification,
      product.features,
      product.modelNumber,
      product.price,
      product.imageUrl,
      product.category.categoryId,
      product.subcategory.subcategoryId,
    ));
  }
  
  async getProductByCategorySubcategory(categoryId: number, subcategoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { category: Equal(categoryId), subcategory: Equal(subcategoryId) },
    });
  }

  async getProductById(productId: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId: Equal(productId) },
    });
  }
}
