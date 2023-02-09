import { Module } from '@nestjs/common';
import { PostsFlukeService } from './posts-fluke.service';
import { PostsFlukeController } from './posts-fluke.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PostsFlukeController],
  providers: [PostsFlukeService, PrismaService],
})
export class PostsFlukeModule {}
