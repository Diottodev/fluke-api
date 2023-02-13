import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersFlukeService } from './users-fluke.service';
import { UpdateUsersFlukeInput } from './dto/update-users-fluke.input';
import { DataUsersFlukeOutput } from './dto/data-users-fluke.output';
import { DataOutputUsersFluke } from './entities/data-output-users-fluke';
import { CreateUsersFlukeInput } from './dto/create-users-fluke.input';
import * as bcrypt from 'bcrypt';

@Resolver(() => DataOutputUsersFluke)
export class UsersFlukeResolver {
  constructor(private readonly usersFlukeService: UsersFlukeService) {}

  @Mutation(() => DataOutputUsersFluke)
  async createUsersFluke(
    @Args('data') data: CreateUsersFlukeInput,
  ): Promise<DataUsersFlukeOutput> {
    try {
      const result = await this.usersFlukeService.findOneEmail(data.email);

      if (result === null) {
        const saltOrRounds = 10;
        const password = data.password;

        const hash = await bcrypt.hash(password, saltOrRounds);
        data.password = hash;

        const user = await this.usersFlukeService.create(data);

        return {
          message: 'Conta cadastrada com sucesso!',
          response: true,
          data: user,
        };
      }
      if (result.email === data.email)
        return {
          message: 'Ops. Email em uso por outro usuário!',
          response: false,
          data: null,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => [DataOutputUsersFluke], { name: 'usersFlukeAll' })
  findAll() {
    return this.usersFlukeService.findAll();
  }

  @Query(() => DataOutputUsersFluke, { name: 'usersFluke' })
  async findOne(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DataUsersFlukeOutput> {
    try {
      const result = await this.usersFlukeService.findOneById(id);

      if (result === null)
        return {
          message: 'Usuário não encontrado!',
          response: false,
          data: null,
        };
      if (result.id === id)
        return {
          message: 'Usuário encontrado com sucesso!',
          response: true,
          data: result,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => DataOutputUsersFluke)
  async updateUsersFluke(
    @Args('data') data: UpdateUsersFlukeInput,
  ): Promise<DataUsersFlukeOutput> {
    try {
      const result = await this.usersFlukeService.findOneEmail(data.email);

      if (result === null) {
        const updateUser = await this.usersFlukeService.update(data.id, data);

        return {
          message: 'Conta editada com sucesso!',
          response: true,
          data: updateUser,
        };
      }
      if (result.email === data.email)
        return {
          message: 'Ops. usuário não encontrado!',
          response: false,
          data: null,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  @Mutation(() => DataOutputUsersFluke)
  async removeUsersFluke(
    @Args('id', { type: () => String }) id: string,
  ): Promise<DataUsersFlukeOutput> {
    try {
      const result = await this.usersFlukeService.findOneById(id);

      if (result === null)
        return {
          message: 'Usuário não encontrado!',
          response: false,
          data: null,
        };
      if (result.id === id) {
        const deleteUSer = await this.usersFlukeService.remove(id);
        return {
          message: `Usuário ${deleteUSer.name} ${deleteUSer.lastName} deletado com sucesso!`,
          response: true,
          data: null,
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
