import { Test, TestingModule } from '@nestjs/testing';
import { ResponsesPerDayService } from './responses-per-day.service';

describe('ResponsesPerDayService', () => {
  let service: ResponsesPerDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsesPerDayService],
    }).compile();

    service = module.get<ResponsesPerDayService>(ResponsesPerDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
