import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get(AppService);
  });

  describe('root', () => {
    it('should return empty string', () => {
      expect(appService.runOfferJob()).toBe('');
    });
  });
});
