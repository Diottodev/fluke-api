import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersFlukeService } from './users-fluke.service';
import { UsersFluke } from './entities/users-fluke.entity';
import { UpdateUsersFlukeInput } from './dto/update-users-fluke.input';
import { DataOutput } from './dto/data-users-fluke.output';

@Resolver()
export class UsersFlukeResolver {
  constructor(private readonly usersFlukeService: UsersFlukeService) {}

  @Mutation(() => UsersFluke)
  async createUsersFluke(@Args('data') data: DataOutput) {
    console.log(1);

    await this.usersFlukeService.create(data.data);
    return {
      data: data.data,
      response: data.response,
      message: data.message,
    };
  }

  @Query(() => [UsersFluke], { name: 'usersFluke' })
  findAll() {
    return this.usersFlukeService.findAll();
  }

  @Query(() => UsersFluke, { name: 'usersFluke' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersFlukeService.findOne(id);
  }

  @Mutation(() => UsersFluke)
  updateUsersFluke(
    @Args('updateUsersFlukeInput') updateUsersFlukeInput: UpdateUsersFlukeInput,
  ) {
    return this.usersFlukeService.update(
      updateUsersFlukeInput.id,
      updateUsersFlukeInput,
    );
  }

  @Mutation(() => UsersFluke)
  removeUsersFluke(@Args('id', { type: () => String }) id: string) {
    return this.usersFlukeService.remove(id);
  }
}
