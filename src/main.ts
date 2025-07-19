import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ZodValidationPipe } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // Sử dụng ZodValidationPipe global
  app.useGlobalPipes(new ZodValidationPipe());
}
bootstrap();
