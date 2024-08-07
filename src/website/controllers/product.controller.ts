import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/shared/entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(id: number): Promise<Product> {
    return this.productService.findById(id);
  }
}
