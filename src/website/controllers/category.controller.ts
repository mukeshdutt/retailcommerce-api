import { Response} from "express";
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { sendErrorResponse, sendSuccessResponse } from 'src/common/utils/response.util';
import { ErrorCodes } from "src/common/constants/error-codes";

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Get all categories
  @Get()
  async getAll(@Res() response: Response): Promise<void> {
      const categories = await this.categoryService.allCategories();

      if(categories.length === 0) {
          return sendErrorResponse(response, HttpStatus.NOT_FOUND, ErrorCodes.NO_CATEGORY);
      }
      sendSuccessResponse(response, categories);    
  }
}
