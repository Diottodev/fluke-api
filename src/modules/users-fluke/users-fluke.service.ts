import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUsersFlukeInput } from './dto/create-users-fluke.input';
import { UpdateUsersFlukeInput } from './dto/update-users-fluke.input';

@Injectable()
export class UsersFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createUsersFlukeInput: CreateUsersFlukeInput) {
    const user = await this.prisma.userFluke.create({
      data: createUsersFlukeInput,
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.userFluke.findMany();
    console.log(users);
    return users;
  }

  async findOneById(id: string) {
    const user = await this.prisma.userFluke.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findOneEmail(email: string) {
    const user = await this.prisma.userFluke.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async update(id: string, updateUsersFlukeInput: UpdateUsersFlukeInput) {
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
    return updateUser;
  }

  async remove(id: string) {
    const deleteUser = await this.prisma.userFluke.delete({ where: { id } });

    return deleteUser;
  }
}
