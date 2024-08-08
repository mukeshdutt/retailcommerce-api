import { Response} from "express";
import { Controller, Get, Res } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { sendSuccessResponse } from 'src/common/utils/response.util';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Get all categories
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
      const categories = await this.categoryService.allCategories();

      if(categories.length === 0) {
          sendSuccessResponse(response, [], 'No categories found');
          return;
      }
      sendSuccessResponse(response, categories);    
  }

  // Get all categories with subcategories
  @Get('subcategories')
  async allCategoriesWithSubcategories(@Res() response: Response): Promise<void> {
    const categories = await this.categoryService.getCategoriesWithSubcategories();

    if(categories.length === 0) {
        sendSuccessResponse(response, [], 'No categories found');
        return;
    }
    sendSuccessResponse(response, categories);
  }
}
