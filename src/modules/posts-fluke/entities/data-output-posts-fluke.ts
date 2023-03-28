import { ObjectType, Field } from '@nestjs/graphql';
import { PostsFluke } from './posts-fluke.entity';

@ObjectType()
export class DataOutputPostsFluke {
  @Field(() => Boolean, { nullable: true })
  response?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => PostsFluke, { nullable: true })
  data?: PostsFluke;
}
