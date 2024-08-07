import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../shared/entities/category.entity';
import { CategoryService } from './services/category.service';
import { CategoryController } from './controllers/category.controller';
import { SubcategoryService } from './services/subcategory.service';
import { SubcategoryController } from './controllers/subcategory.controller';
import { Subcategory } from 'src/shared/entities/subcategory.entity';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product } from 'src/shared/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Subcategory, Product])],
  providers: [CategoryService, SubcategoryService, ProductService],
  controllers: [CategoryController, SubcategoryController, ProductController],
  exports: [TypeOrmModule],
})
export class WebsiteModule {}
