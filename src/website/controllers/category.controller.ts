import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../../shared/entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async fundById(id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }
}
