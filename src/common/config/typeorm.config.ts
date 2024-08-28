import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';
import { Product } from 'src/shared/entities/product.entity';
import { Subcategory } from 'src/shared/entities/subcategory.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@MySQL567',
  database: 'retailcommerce',
  entities: [Category, Subcategory, Product],
  synchronize: true, // Set to false in production
  logging: ['query', 'error'],
};
