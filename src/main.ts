import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './common/config/swagger.config';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './common/config/winston.config';
import { HttpExceptionsFilter } from './common/filters/http-exceptions.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  // Create the app with the Winston logger
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });

  const configService = app.get(ConfigService);
  app.useGlobalFilters(new HttpExceptionsFilter());
  
  // CORS setup
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Swagger setup
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // Start the app
  await app.listen(configService.get<number>('APP_PORT'));
  // await app.listen(3000);
}
bootstrap();
