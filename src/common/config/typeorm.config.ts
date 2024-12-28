// -- Dependencies
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

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

// -- TypeORM configuration
export const typeOrmConfig = (): TypeOrmModuleOptions => {
  const configService = new ConfigService();
  const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USERNAME'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    entities: [Category, Product, GalleryImage, ClayProduct, TerracottaProduct, PotterWheelProduct, Enquiry, EnquiryItem, Wishlist],
    synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE'),
    logging: ['query', 'error'],
    retryAttempts: 2,
  };
  return config;
};