// -- Importing required modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// -- Services
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { WebsiteService } from './services/website.service';
import { CartService } from './services/cart.service';

// -- Controllers
import { CategoryController } from './controllers/category.controller';
import { ProductController } from './controllers/product.controller';
import { WebsiteController } from './controllers/website.controller';
import { CartController } from './controllers/cart.controller';

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
import { Cart } from 'src/shared/entities/cart.entity';
import { User } from 'src/shared/entities/user.entity';
import { UserProfile } from 'src/shared/entities/user-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile, Category, Product, Cart, GalleryImage, ClayProduct, TerracottaProduct, PotterWheelProduct, Enquiry, EnquiryItem, Wishlist])],
  providers: [CategoryService, ProductService, WebsiteService, CartService],
  controllers: [CategoryController, ProductController, WebsiteController, CartController],
  exports: [TypeOrmModule],
})
export class WebsiteModule {}
