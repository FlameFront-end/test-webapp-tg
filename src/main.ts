import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({ credentials: true, origin: true });

  await app.listen(process.env.PORT);
  console.log(`Server start http://localhost:${process.env.PORT}/swagger`);
}
bootstrap();
