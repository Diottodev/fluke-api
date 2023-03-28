import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreatePostsFlukeInput {
  @Length(5, 40)
  @Field()
  title?: string;

  @Length(5, 244)
  @Field()
  content?: string;

  @Field()
  authorId?: string;
}
