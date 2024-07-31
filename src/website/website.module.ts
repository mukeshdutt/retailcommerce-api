import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../shared/entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { SubcategoryService } from './services/subcategory.service';
import { SubcategoryController } from './controllers/subcategory.controller';
import { Subcategory } from 'src/shared/entities/subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Subcategory])],
  providers: [CategoryService, SubcategoryService],
  controllers: [CategoryController, SubcategoryController],
  exports: [TypeOrmModule],
})
export class WebsiteModule {}
