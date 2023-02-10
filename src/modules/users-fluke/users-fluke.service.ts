import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUsersFlukeInput } from './dto/create-users-fluke.input';
import { UpdateUsersFlukeInput } from './dto/update-users-fluke.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createUsersFlukeInput: CreateUsersFlukeInput) {
    console.log(2);

    const emailExist = await this.prisma.userFluke.findFirst({
      where: {
        email: createUsersFlukeInput.email,
      },
    });

    if (!emailExist) {
      const saltOrRounds = 10;

      const hash = await bcrypt.hash(
        createUsersFlukeInput.password,
        saltOrRounds,
      );

      createUsersFlukeInput.password = hash;

      const user = await this.prisma.userFluke.create({
        data: createUsersFlukeInput,
      });
      console.log(4);

      return user;
    }
    return {
      message: 'Usuario encontrado',
      response: true,
      data: [],
    };
  }

  findAll() {
    return `This action returns all usersFluke`;
  }

  async findOne(id: string) {
    const user = await this.prisma.userFluke.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        message: 'Usuario não encontrado',
        response: false,
        data: [],
      };
    }
    return {
      message: 'Usuario encontrado',
      response: true,
      data: user,
    };
  }

  async update(id: string, updateUsersFlukeInput: UpdateUsersFlukeInput) {
    const user = await this.prisma.userFluke.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        response: false,
        message: 'Usuario não encontrado',
        data: [],
      };
    }
    const updateUser = this.prisma.userFluke.update({
      where: {
        id,
      },
      data: {
        id: updateUsersFlukeInput.id,
        birthDate: updateUsersFlukeInput.birthDate,
        bio: updateUsersFlukeInput.bio,
        email: updateUsersFlukeInput.email,
        password: updateUsersFlukeInput.password,
        isOn: updateUsersFlukeInput.isOn,
        name: updateUsersFlukeInput.name,
        lastName: updateUsersFlukeInput.lastName,
      },
    });
    return {
      message: 'Perfil editado com sucesso',
      response: true,
      user: updateUser,
    };
  }

  async remove(id: string) {
    const user = await this.prisma.userFluke.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return {
        response: false,
        message: 'Usuario não encontrado',
        data: [],
      };
    }
    const deleteUser = await this.prisma.userFluke.delete({ where: { id } });

    return {
      message: 'Conta deletada com sucesso!',
      response: true,
      user: deleteUser,
    };
  }
}
