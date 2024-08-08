import { Controller, Get, Param, Res } from '@nestjs/common';
import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory } from 'src/shared/entities/subcategory.entity';
import { sendSuccessResponse } from 'src/common/utils/response.util';
import {Response} from 'express';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  // Getting all subcategories
  @Get()
async allSubcategory(@Res() response: Response,): Promise<void> {
    const subcategories =  await this.subcategoryService.getSubcategories();

    if(subcategories.length === 0) {
      sendSuccessResponse(response, [], 'No subcategories found for the given category');
      return
    }
    sendSuccessResponse(response, subcategories);
  }

  // Getting subcategory by id
  @Get(':id')
  async subcategoryById(@Res() response: Response, @Param("id") Id: number): Promise<Subcategory> {
    const subcategories = await this.subcategoryService.getSubcategoryById(Id);

    if(subcategories === undefined) {
      sendSuccessResponse(response, [], 'No subcategories found for the given category');
      return
    }
    sendSuccessResponse(response, subcategories);
  }

  // Getting subcategories by category id
  @Get('category/:categoryId')
  async getSubcateoriesByCategoryId(@Res() response: Response, @Param("categoryId") categoryId: number): Promise<void> {
    const subcategories = await this.subcategoryService.getSubcategoryBySubcategoryId(categoryId);
    if(subcategories.length === 0) {
      sendSuccessResponse(response, [], 'No subcategories found for the given category');
      return
    }
    sendSuccessResponse(response, subcategories);
  }
}
