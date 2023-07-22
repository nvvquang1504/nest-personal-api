import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('My Coffee Store API')
    .setVersion('1.0')
    .build();
  // CREATE SWAGGER DOCUMENT
  const document = SwaggerModule.createDocument(app, config);
  // SET UP API ENDPOINT
  SwaggerModule.setup('api', app, document);
  // CORS
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
