import { Module } from '@nestjs/common';
import { UserFlukeService } from './user-fluke.service';
import { UserFlukeController } from './user-fluke.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [UserFlukeController],
  providers: [UserFlukeService, PrismaService],
})
export class UserFlukeModule {}
