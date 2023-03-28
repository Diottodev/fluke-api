import { Test, TestingModule } from '@nestjs/testing';
import { PostsFlukeService } from './posts-fluke.service';

describe('PostsFlukeService', () => {
  let service: PostsFlukeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsFlukeService],
    }).compile();

    service = module.get<PostsFlukeService>(PostsFlukeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
