import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await NestFactory.create(
    AppModule,{
      cors:true});
      app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
