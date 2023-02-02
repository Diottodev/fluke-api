import { Module } from '@nestjs/common';
import { UserFlukeModule } from './modules/userfluke/user-fluke.module';

@Module({
  imports: [UserFlukeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
