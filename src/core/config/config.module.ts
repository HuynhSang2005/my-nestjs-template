import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true, // Biến môi trường là global
      envFilePath: '.env', // path file .env
    }),
  ],
})
export class ConfigModule {}