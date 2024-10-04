import { Response } from 'express';
import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Product } from 'src/shared/entities/product.entity';
import { ProductService } from '../services/product.service';
import { sendSuccessResponse } from 'src/common/utils/response.util';
import { ProductViewModel } from '../viewmodels/product.viewmodel';

@Controller('product')
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

  // Get products by category and subcategory
  @Get("category/:categoryId/subcategory/:subcategoryId")
  async getByCategorySubcategory(@Res() response: Response, @Param("categoryId") categoryid: number, @Param("subcategoryId") subcategoryid: number): Promise<void> {
    const products = await this.productService.getProductByCategorySubcategory(categoryid, subcategoryid);

    if(products.length === 0) {
      sendSuccessResponse(response, [], 'No products found');
      return;
    }
    sendSuccessResponse(response, products);
  }
}
