import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../../shared/entities/category.entity';
import { CategoryViewModel } from '../viewmodels/category.viewmodel';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAll(): Promise<CategoryViewModel[]> {
    return this.categoryService.allCategories();
  }

  @Get('subcategories')
  async allCategoriesWithSubcategories(): Promise<CategoryViewModel[]> {
    return this.categoryService.getCategoriesWithSubcategories();
  }
}
