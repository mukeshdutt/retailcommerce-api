import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './common/config/winston.config';
import { typeOrmConfig } from './common/config/typeorm.config';
import { Category } from './shared/entities/category.entity';
import { WebsiteModule } from './website/website.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Category]),
    WinstonModule.forRoot(winstonConfig),
    WebsiteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
