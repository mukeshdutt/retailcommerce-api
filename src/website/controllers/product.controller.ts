import { Response } from 'express';
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Product } from 'src/shared/entities/product.entity';
import { ProductService } from '../services/product.service';
import { sendSuccessResponse } from 'src/common/utils/response.util';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Get all products
  @Get()
  async getProducts(@Res() response: Response): Promise<void> {
    const products= await this.productService.getProducts();

    if(products.length === 0) {
      sendSuccessResponse(response, [], 'No products found');
      return;
    }
    sendSuccessResponse(response, products);
  }

  // Get products by category and subcategory
  @Get("category-subcategory")
  async getByCategorySubcategory(@Res() response: Response, @Query("categoryid") categoryid: number, @Query("subcategoryid") subcategoryid: number): Promise<void> {
    const products = await this.productService.getProductByCategorySubcategory(categoryid, subcategoryid);

    if(products.length === 0) {
      sendSuccessResponse(response, [], 'No products found');
      return;
    }
    sendSuccessResponse(response, products);
  }
}
