import { Test, TestingUserFluke } from '@nestjs/testing';
import { PostsFlukeController } from './posts-fluke.controller';
import { PostsFlukeService } from './posts-fluke.service';

describe('PostsFlukeController', () => {
  let controller: PostsFlukeController;

  beforeEach(async () => {
    const module: TestingUserFluke = await Test.createTestingUserFluke({
      controllers: [PostsFlukeController],
      providers: [PostsFlukeService],
    }).compile();

    controller = module.get<PostsFlukeController>(PostsFlukeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
