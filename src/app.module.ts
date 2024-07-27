import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './common/entity/user.entity';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './config/winston.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@MySQL678',
      database: 'retailcommerce',
      entities: [Users],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([Users]),
    WinstonModule.forRoot(winstonConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
