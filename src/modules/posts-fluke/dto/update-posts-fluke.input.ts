import { CreatePostsFlukeInput } from './create-posts-fluke.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostsFlukeInput extends PartialType(CreatePostsFlukeInput) {
  @Field(() => String)
  id: string;

  @Field(() => Date)
  updatedAt: Date;
}
