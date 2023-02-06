import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import UserFlukeDTO from 'src/dtos/user-fluke-dto';

@Injectable()
export class UserFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createUserFluke: UserFlukeDTO) {
    const emailExist = await this.prisma.userFluke.findFirst({
      where: {
        email: createUserFluke.email,
      },
    });

    if (emailExist) {
      throw new Error('Email ja cadastrado');
    }

    const user = await this.prisma.userFluke.create({ data: createUserFluke });

    return user;
  }
  //implement user search in the future
  findAll() {
    return `This action returns all users`;
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

  async update(id: string, updateUserFluke: UserFlukeDTO) {
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
    const updateUser = this.prisma.userFluke.update({
      where: {
        id,
      },
      data: {
        birthDate: updateUserFluke.birthDate,
        bio: updateUserFluke.bio,
        email: updateUserFluke.email,
        firmPassword: updateUserFluke.firmPassword,
        password: updateUserFluke.password,
        isOnline: updateUserFluke.isOnline,
        name: updateUserFluke.name,
        lasName: updateUserFluke.lasName,
      },
    });
    return {
      message: 'Usuario encontrado',
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
        message: 'Usuario não encontrado',
        response: false,
        data: [],
      };
    }
    return this.prisma.userFluke.delete({ where: { id } });
  }
}
