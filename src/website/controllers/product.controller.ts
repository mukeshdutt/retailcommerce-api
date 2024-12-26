import { Response } from 'express';
import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Product } from 'src/shared/entities/product.entity';
import { ProductService } from '../services/product.service';
import { sendSuccessResponse } from 'src/common/utils/response.util';
import { ProductViewModel } from '../viewmodels/product.viewmodel';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Get all products
  @Get()
  async getProducts(@Res() response: Response): Promise<ProductViewModel> {
    const products= await this.productService.getProducts();

    if(products.length === 0) {
      sendSuccessResponse(response, [], 'No products found');
      return;
    }
    sendSuccessResponse(response, products);
  }

  // Get product by id
  @Get(":id")
  async getProductById(@Res() response: Response, @Param("id") productId: number): Promise<ProductViewModel> {
    const products= await this.productService.getProductById(productId);

    if(products === undefined) {
      sendSuccessResponse(response, [], 'No products found');
      return;
    }
    sendSuccessResponse(response, products);
  }

  @Get("hot")
  async hotProducts(@Res() response: Response): Promise<void> {
  }

  @Get("category/:categoryid")
  async productsByCategory(@Res() response: Response, @Param("categoryid") categoryId: number): Promise<void> {
  }

  @Get("best-selling")
  async bestSellingProducts(@Res() response: Response): Promise<void> {
  }

  @Get("filter")
  async productsByFilter(): Promise<void> {
  }

}
