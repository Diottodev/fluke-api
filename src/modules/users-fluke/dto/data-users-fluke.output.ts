import { InputType, Field } from '@nestjs/graphql';
import { CreateUsersFlukeInput } from './create-users-fluke.input';

@InputType()
export class DataOutput {
  @Field()
  message?: string;

  @Field()
  response?: string;

  @Field()
  data?: CreateUsersFlukeInput;
}
