import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shared/entities/product.entity';
import { Repository } from 'typeorm';

export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { productId: id },
    });
  }
}
