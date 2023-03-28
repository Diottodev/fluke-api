import { ObjectType, Field } from '@nestjs/graphql';
import { UsersFluke } from 'src/modules/users-fluke/entities/users-fluke.entity';

@ObjectType()
export class PostsFluke {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAT?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;

  @Field(() => UsersFluke, { nullable: true })
  author?: UsersFluke | null;

  @Field(() => String, { nullable: true })
  authorId?: string;

  @Field(() => Boolean, { nullable: true })
  viewCont?: boolean;
}
