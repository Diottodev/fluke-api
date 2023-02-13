import { ObjectType, Field } from '@nestjs/graphql';
import { PostsFluke } from 'src/modules/posts-fluke/entities/posts-fluke.entity';

@ObjectType()
export class UsersFluke {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => Boolean, { nullable: true })
  isOn?: boolean;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  birthDate?: string;

  @Field(() => [PostsFluke], { nullable: true })
  PostsFluke: [PostsFluke];
}
