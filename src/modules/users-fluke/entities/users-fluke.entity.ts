import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UsersFluke {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  bio: string;

  @Field()
  isOn: boolean;

  @Field()
  password: string;

  @Field()
  birthDate: string;
}
