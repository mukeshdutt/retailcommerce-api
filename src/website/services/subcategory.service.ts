import { InjectRepository } from '@nestjs/typeorm';
import { Subcategory } from 'src/shared/entities/subcategory.entity';
import { Repository } from 'typeorm';
import { Equal } from 'typeorm';

export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private readonly subcategoryRepository: Repository<Subcategory>,
  ) {}

  async getSubcategories(): Promise<Subcategory[]> {
    return this.subcategoryRepository.find();
  }
  
  async getSubcategoryById(id: number): Promise<Subcategory> {
    return this.subcategoryRepository.findOne({ where: { subcategoryId: id } });
  }
  
  async getSubcategoryBySubcategoryId(categoryId: number): Promise<Subcategory[]> {
    return this.subcategoryRepository.find({ where: { category: Equal(categoryId) } });
  }
}
