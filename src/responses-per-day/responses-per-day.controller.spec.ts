import { Test, TestingModule } from '@nestjs/testing';
import { ResponsesPerDayController } from './responses-per-day.controller';

describe('ResponsesPerDayController', () => {
  let controller: ResponsesPerDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsesPerDayController],
    }).compile();

    controller = module.get<ResponsesPerDayController>(ResponsesPerDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
