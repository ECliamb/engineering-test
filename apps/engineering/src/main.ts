import { NestFactory } from '@nestjs/core';
import { bootstrapApp } from '@eurocamp/server';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3001',
    credentials: true,
  });
  await bootstrapApp(app, 'Engineering', 'api');
}

bootstrap();
