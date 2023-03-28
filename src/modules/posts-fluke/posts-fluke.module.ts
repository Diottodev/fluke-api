import { Module } from '@nestjs/common';
import { PostsFlukeService } from './posts-fluke.service';
import { PostsFlukeResolver } from './posts-fluke.resolver';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  providers: [PostsFlukeResolver, PostsFlukeService, PrismaService],
})
export class PostsFlukeModule {}
