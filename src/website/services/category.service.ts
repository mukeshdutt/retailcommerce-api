// Imported required dependencies
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// -- Entities & ViewModels
import { Category } from '../../shared/entities/category.entity';
import { CategoryViewModel } from '../viewmodels/category.viewmodel';
import logger from '../../common/logger/logger';

// -- Service class
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async parentCategories(): Promise<CategoryViewModel[]> {
    const categories = await this.categoryRepository.find({where: {isActive: true, parentId: 0}});
    return categories.map(category => new CategoryViewModel(category.categoryId, category.name, category.description, category.imageUrl));
  }

  async allCategories(): Promise<CategoryViewModel[]> {
    const categories = await this.categoryRepository.find({where: {isActive: true}});
    return categories.map(category => new CategoryViewModel(category.categoryId, category.name, category.description, category.imageUrl));
  }
}
