import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsDateString, IsEmail, Length } from 'class-validator';

@InputType()
export class PostCreateInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  content: string;
}

@InputType()
export class CreateUsersFlukeInput {
  @Field()
  @IsEmail()
  email: string;

  @Length(3, 40)
  @Field()
  name: string;

  @Length(3, 40)
  @Field()
  lastName: string;

  @Field()
  bio?: string;

  @IsBoolean()
  @Field()
  isOn?: boolean;

  @Length(8, 40)
  @Field()
  password: string;

  @IsDateString()
  @Field()
  birthDate?: string;

  @Field({ nullable: true })
  postsFluke?: PostCreateInput;
}
