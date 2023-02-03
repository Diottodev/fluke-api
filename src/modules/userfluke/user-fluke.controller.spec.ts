import { Test, TestingUserFluke } from '@nestjs/testing';
import { UserFlukeController } from './user-fluke.controller';
import { UserFlukeService } from './user-fluke.service';

describe('UserFlukeController', () => {
  let controller: UserFlukeController;

  beforeEach(async () => {
    const module: TestingUserFluke = await Test.createTestingUserFluke({
      controllers: [UserFlukeController],
      providers: [UserFlukeService],
    }).compile();

    controller = module.get<UserFlukeController>(UserFlukeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
