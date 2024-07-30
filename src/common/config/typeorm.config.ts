import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@MySQL678',
  database: 'retailcommerce',
  entities: [Category],
  synchronize: true, // Set to false in production
};
