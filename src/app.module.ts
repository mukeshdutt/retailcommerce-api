// -- Import required modules
import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './common/config/winston.config';
import { typeOrmConfig } from './common/config/typeorm.config';
import { WebsiteModule } from './website/website.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `env/.env.${process.env.NODE_ENV || 'development'}`,
      envFilePath: `env/.env.production`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig()),
    WinstonModule.forRoot(winstonConfig),
    WebsiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
