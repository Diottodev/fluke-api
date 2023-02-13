import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsFlukeService } from './posts-fluke.service';
import { UpdatePostsFlukeInput } from './dto/update-posts-fluke.input';
import { DataPostsFlukeOutput } from './dto/data-posts-fluke.output';
import { DataOutputPostsFluke } from './entities/data-output-posts-fluke';
import { CreatePostsFlukeInput } from './dto/create-posts-fluke.input';

@Resolver(() => DataOutputPostsFluke)
export class PostsFlukeResolver {
  constructor(private readonly postsFlukeService: PostsFlukeService) {}

  @Mutation(() => DataOutputPostsFluke)
  async createPostsFluke(
    @Args('data') data: CreatePostsFlukeInput,
  ): Promise<DataPostsFlukeOutput> {
    try {
      const result = await this.postsFlukeService.create(data);

      return {
        message: 'Publicação concluida com sucesso!',
        response: true,
        data: result,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => [DataOutputPostsFluke], { name: 'postsFlukeAll' })
  findAll() {
    return this.postsFlukeService.findAll();
  }

  @Query(() => DataOutputPostsFluke, { name: 'postsFluke' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DataPostsFlukeOutput> {
    try {
      const result = await this.postsFlukeService.findOneById(id);

      if (result === null)
        return {
          message: 'Publicação não encontrada!',
          response: false,
          data: null,
        };
      if (result.id === id)
        return {
          message: 'Publicação encontrada com sucesso!',
          response: true,
          data: result,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => DataOutputPostsFluke)
  async updatePostsFluke(
    @Args('data') data: UpdatePostsFlukeInput,
  ): Promise<DataPostsFlukeOutput> {
    try {
      const result = await this.postsFlukeService.findOneById(data.id);

      if (result === null) {
        const updateUser = await this.postsFlukeService.update(data.id, data);

        return {
          message: 'Publicação editada com sucesso!',
          response: true,
          data: updateUser as unknown,
        };
      }
      if (result.id === data.id)
        return {
          message: 'Ops. publicação não encontrada!',
          response: false,
          data: null,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => DataOutputPostsFluke)
  async removePostsFluke(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DataPostsFlukeOutput> {
    try {
      const result = await this.postsFlukeService.findOneById(id);

      if (result === null)
        return {
          message: 'Publicação não encontrada!',
          response: false,
          data: null,
        };
      if (result.id === id) {
        await this.postsFlukeService.remove(id);
        return {
          message: `Publicação deletada com sucesso!`,
          response: true,
          data: null,
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
