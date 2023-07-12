import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const offerEntityObjects = await app.get(AppService).runOfferJob();
  console.log(
    `[LOG] Successfully transformed offers: ${offerEntityObjects.length}\n`,
    offerEntityObjects.flat().filter((o) => o),
  );
}

bootstrap();
