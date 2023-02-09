import { Module } from '@nestjs/common';
import { UserFlukeModule } from './modules/userfluke/user-fluke.module';
import { PostsFlukeModule } from './modules/posts-fluke/posts-fluke.module';

@Module({
  imports: [UserFlukeModule, PostsFlukeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
