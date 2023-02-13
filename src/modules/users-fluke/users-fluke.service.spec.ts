import { Test, TestingModule } from '@nestjs/testing';
import { UsersFlukeService } from './users-fluke.service';

describe('UsersFlukeService', () => {
  let service: UsersFlukeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersFlukeService],
    }).compile();

    service = module.get<UsersFlukeService>(UsersFlukeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
