import { Test, TestingModule } from '@nestjs/testing';
import { PostsFlukeResolver } from './posts-fluke.resolver';
import { PostsFlukeService } from './posts-fluke.service';

describe('PostsFlukeResolver', () => {
  let resolver: PostsFlukeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsFlukeResolver, PostsFlukeService],
    }).compile();

    resolver = module.get<PostsFlukeResolver>(PostsFlukeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
