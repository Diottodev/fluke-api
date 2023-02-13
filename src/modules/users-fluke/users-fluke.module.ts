import { Module } from '@nestjs/common';
import { UsersFlukeService } from './users-fluke.service';
import { UsersFlukeResolver } from './users-fluke.resolver';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [UsersFlukeResolver, UsersFlukeService, PrismaService],
})
export class UsersFlukeModule {}
