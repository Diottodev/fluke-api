import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsersFlukeInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  bio: string;

  @Field(() => Boolean, { description: 'Online' })
  isOn: boolean;

  @Field()
  password: string;

  @Field()
  birthDate: string;
}
