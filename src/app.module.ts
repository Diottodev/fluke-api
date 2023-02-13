import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersFlukeModule } from './modules/users-fluke/users-fluke.module';
import { PrismaService } from './database/PrismaService';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersFlukeModule,
  ],
  providers: [UsersFlukeModule, PrismaService],
})
export class AppModule {}
