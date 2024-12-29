import { Response } from 'express';
import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { Product } from 'src/shared/entities/product.entity';
import { ProductService } from '../services/product.service';
import { sendErrorResponse, sendSuccessResponse } from 'src/common/utils/response.util';
import { ProductViewModel } from '../viewmodels/product.viewmodel';
import { ErrorCodes } from 'src/common/constants/error-codes';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Get all hot products
  @Get("hot")
  async hotProducts(@Res() response: Response): Promise<void> {
    const hotProducts = await this.productService.getHotProducts();
    
    if(hotProducts.length === 0) {
      return sendErrorResponse(response, HttpStatus.NOT_FOUND, ErrorCodes.NO_HOT_PRODUCTS);
    }
    sendSuccessResponse(response, hotProducts);
  }

  // Get product details by product id
  @Get("category/:categoryid")
  async productsByCategory(@Res() response: Response, @Param("categoryid") categoryId: number): Promise<void> {
    const products = await this.productService.getProductByCategoryId(categoryId);

    if(products.length === 0) {
      return sendErrorResponse(response, HttpStatus.NOT_FOUND, ErrorCodes.NO_PRODUCTS_FOR_CATEGORY);
    }
    sendSuccessResponse(response, products);
  }

  @Get("best-selling")
  async bestSellingProducts(@Res() response: Response): Promise<void> {
  }

  @Get("filter")
  async productsByFilter(): Promise<void> {
  }
}
