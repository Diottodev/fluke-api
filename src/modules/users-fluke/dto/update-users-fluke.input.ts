import { CreateUsersFlukeInput } from './create-users-fluke.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsersFlukeInput extends PartialType(CreateUsersFlukeInput) {
  @Field(() => String)
  id: string;
}
