import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';
import { Product } from 'src/shared/entities/product.entity';
import { Subcategory } from 'src/shared/entities/subcategory.entity';

export const typeOrmConfig = (): TypeOrmModuleOptions => {
  const configService = new ConfigService();
  const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: configService.get<string>('DATABASE_HOST'),
    port: configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USERNAME'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    entities: [Category, Subcategory, Product],
    synchronize: configService.get<boolean>('DATABASE_SYNCHRONIZE'),
    logging: ['query', 'error'],
  };
  return config;
};
