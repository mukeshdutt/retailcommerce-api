import { Controller, Get } from '@nestjs/common';
import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory } from 'src/shared/entities/subcategory.entity';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Get()
  findAll(): Promise<Subcategory[]> {
    return this.subcategoryService.findAll();
  }

  @Get(':id')
  findById(Id: number): Promise<Subcategory> {
    return this.subcategoryService.findById(Id);
  }

  @Get('category/:categoryId')
  findByCategoryId(categoryId: number): Promise<Subcategory[]> {
    return this.subcategoryService.findByCategoryId(categoryId);
  }
}
