import { InputType, Field } from '@nestjs/graphql';
import { UsersFluke } from '../entities/users-fluke.entity';
import { CreateUsersFlukeInput } from './create-users-fluke.input';

@InputType()
export class DataUsersFlukeOutput {
  @Field(() => Boolean, { nullable: true })
  response?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => UsersFluke, { nullable: true })
  data?: CreateUsersFlukeInput;
}
