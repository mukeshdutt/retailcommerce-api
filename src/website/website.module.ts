// -- Importing required modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// -- Services
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

// -- Controllers
import { CategoryController } from './controllers/category.controller';
import { ProductController } from './controllers/product.controller';

// ---- Entities
import { Category } from 'src/shared/entities/category.entity';
import { Product } from 'src/shared/entities/product.entity';
import { GalleryImage } from 'src/shared/entities/gallery-image.entity';
import { ClayProduct } from 'src/shared/entities/clay-product.entity';
import { TerracottaProduct } from 'src/shared/entities/terracotta-product.entity';
import { PotterWheelProduct } from 'src/shared/entities/potter-wheel-product.entity';
import { Enquiry } from 'src/shared/entities/enquiry.entity';
import { EnquiryItem } from 'src/shared/entities/enquiry-item.entity';
import { Wishlist } from 'src/shared/entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product, GalleryImage, ClayProduct, TerracottaProduct, PotterWheelProduct, Enquiry, EnquiryItem, Wishlist])],
  providers: [CategoryService, ProductService],
  controllers: [CategoryController, ProductController],
  exports: [TypeOrmModule],
})
export class WebsiteModule {}
