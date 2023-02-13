import { Test, TestingModule } from '@nestjs/testing';
import { UsersFlukeResolver } from './users-fluke.resolver';
import { UsersFlukeService } from './users-fluke.service';

describe('UsersFlukeResolver', () => {
  let resolver: UsersFlukeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersFlukeResolver, UsersFlukeService],
    }).compile();

    resolver = module.get<UsersFlukeResolver>(UsersFlukeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
