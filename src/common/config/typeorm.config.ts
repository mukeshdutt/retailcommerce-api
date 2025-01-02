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
import { PotProduct } from 'src/shared/entities/pot-product.entity';
import { Cart } from 'src/shared/entities/cart.entity';
import { User } from 'src/shared/entities/user.entity';
import { UserProfile } from 'src/shared/entities/user-profile.entity';

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
    entities: [User, UserProfile, Category, Product, Cart, GalleryImage, ClayProduct, PotProduct, TerracottaProduct, PotterWheelProduct, Enquiry, EnquiryItem, Wishlist],
    synchronize: false,
    retryAttempts: configService.get<number>("DATABASE_MAXIMUM_RETRY"),
    logging: ['query', 'error'],
  };
  return config;
};