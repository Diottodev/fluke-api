import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import CreateUserFlukeDTO from 'src/dtos/create-user-fluke';

@Injectable()
export class UserFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createUserFluke: CreateUserFlukeDTO) {
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

  findAll() {
    return `This action returns all modules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateUserFluke: CreateUserFlukeDTO) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
