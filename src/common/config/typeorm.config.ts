import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';
import { Subcategory } from 'src/shared/entities/subcategory.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@MySQL678',
  database: 'retailcommerce',
  entities: [Category, Subcategory],
  synchronize: true, // Set to false in production
};
