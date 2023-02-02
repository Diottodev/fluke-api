import { Test, TestingUserFluke } from '@nestjs/testing';
import { UserFlukeService } from './user-flukeservice';

describe('UserFlukeService', () => {
  let service: UserFlukeService;

  beforeEach(async () => {
    const module: TestingUserFluke = await Test.createTestingUserFluke({
      providers: [UserFlukeService],
    }).compile();

    service = module.get<UserFlukeService>(UserFlukeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
