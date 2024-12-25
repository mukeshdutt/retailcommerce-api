// -- Import required modules
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './common/config/winston.config';
import { typeOrmConfig } from './common/config/typeorm.config';
import { WebsiteModule } from './website/website.module';
import { ConfigModule } from '@nestjs/config';

// -- Entities
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
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `env/.env.${process.env.NODE_ENV || 'development'}`,
      envFilePath: `env/.env.production`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig()),
    TypeOrmModule.forFeature([Category, Product, GalleryImage, ClayProduct, TerracottaProduct, PotterWheelProduct, Enquiry, EnquiryItem, Wishlist]),
    WinstonModule.forRoot(winstonConfig),
    WebsiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
