import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const offerEntityObjects = await app.get(AppService).runOfferJob();
  console.log(
    `\nSuccessfully transformed offers: `,
    offerEntityObjects.flat().filter((o) => o),
  );
}

bootstrap();
