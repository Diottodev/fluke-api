import { Test, TestingUserFluke } from '@nestjs/testing';
import { PostsFlukeService } from './posts-fluke.service';

describe('PostsFlukeService', () => {
  let service: PostsFlukeService;

  beforeEach(async () => {
    const module: TestingUserFluke = await Test.createTestingUserFluke({
      providers: [PostsFlukeService],
    }).compile();

    service = module.get<PostsFlukeService>(PostsFlukeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
