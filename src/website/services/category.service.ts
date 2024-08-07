import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../shared/entities/category.entity';
import {
  CategoryViewModel,
  SubcategoryViewModel,
} from '../viewmodels/category.viewmodel';
import logger from '../../common/logger/logger';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async allCategories(): Promise<CategoryViewModel[]> {
    const categories = await this.categoryRepository.find();
    return categories.map(category => new CategoryViewModel(category.categoryId, category.name, category.description));
  }

  async findById(id: number): Promise<Category> {
    return this.categoryRepository.findOne({ where: { categoryId: id } });
  }
  
  async getCategoriesWithSubcategories(): Promise<CategoryViewModel[]> {
  
    const categories = await this.categoryRepository.find({ relations: ['subcategories'] });
    return categories.map(category => new CategoryViewModel(
      category.categoryId,
      category.name,
      category.description,
      category.subCategories.map(sub => new SubcategoryViewModel(sub.subcategoryId, sub.name))
    ));
  }
}
