import { NestFactory } from '@nestjs/core';
import { bootstrapApp } from '@eurocamp/server';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await bootstrapApp(app, 'Engineering', 'api');
}

bootstrap();
