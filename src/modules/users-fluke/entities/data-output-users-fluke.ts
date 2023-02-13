import { ObjectType, Field } from '@nestjs/graphql';
import { UsersFluke } from './users-fluke.entity';

@ObjectType()
export class DataOutputUsersFluke {
  @Field(() => Boolean, { nullable: true })
  response?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => UsersFluke, { nullable: true })
  data?: UsersFluke;
}
