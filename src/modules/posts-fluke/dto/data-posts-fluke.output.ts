import { InputType, Field } from '@nestjs/graphql';
import { PostsFluke } from '../entities/posts-fluke.entity';
import { CreatePostsFlukeInput } from './create-posts-fluke.input';

@InputType()
export class DataPostsFlukeOutput {
  @Field(() => Boolean, { nullable: true })
  response?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => PostsFluke, { nullable: true })
  data?: CreatePostsFlukeInput;
}
