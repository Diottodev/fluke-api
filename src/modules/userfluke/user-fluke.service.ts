import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import UserFlukeDTO from 'src/dtos/user-fluke-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createUserFluke: UserFlukeDTO) {
    const emailExist = await this.prisma.userFluke.findFirst({
      where: {
        email: createUserFluke.email,
      },
    });

    const saltOrRounds = 10;

    const hash = await bcrypt.hash(createUserFluke.password, saltOrRounds);
    const firmHash = await bcrypt.hash(
      createUserFluke.firmPassword,
      saltOrRounds,
    );

    createUserFluke.password = hash;
    createUserFluke.firmPassword = firmHash;

    if (emailExist) {
      return {
        response: false,
        message: 'Email já cadastrado',
        data: [],
      };
    }

    const user = await this.prisma.userFluke.create({ data: createUserFluke });

    return {
      response: true,
      message: 'Conta cadastrada com sucesso',
      data: user,
    };
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
