import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
// import PostsFlukeDTO from 'src/dtos/posts-fluke-dto';

@Injectable()
export class PostsFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createPostFluke: Prisma.PostsFlukeCreateInput) {
    const posts = await this.prisma.postsFluke.create({
      data: createPostFluke,
    });
    return {
      response: true,
      message: 'Post criado com sucesso',
      data: [posts],
    };
  }

  async findAll() {
    const posts = await this.prisma.postsFluke.findMany();
    return {
      response: true,
      message: 'Estes são todos os posts',
      data: [posts],
    };
  }

  async findOne(id: string) {
    const post = await this.prisma.postsFluke.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return {
        message: 'Post não encontrado',
        response: false,
        data: [],
      };
    }
    return {
      message: 'Post encontrado',
      response: true,
      data: post,
    };
  }

  async update(id: string, updatePostFluke: Prisma.PostsFlukeUpdateInput) {
    const post = await this.prisma.postsFluke.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return {
        response: false,
        message: 'Usuario não encontrado',
        data: [],
      };
    }
    const updatePost = this.prisma.postsFluke.update({
      where: {
        id,
      },
      data: {
        author: updatePostFluke.author,
        viewCount: updatePostFluke.viewCount,
        content: updatePostFluke.content,
        createdAt: updatePostFluke.createdAt,
        id: updatePostFluke.id,
        published: updatePostFluke.published,
        title: updatePostFluke.title,
        updatedAt: updatePostFluke.updatedAt,
      },
    });
    return {
      message: 'Perfil editado com sucesso',
      response: true,
      Post: [updatePost],
    };
  }

  async remove(id: string) {
    const post = await this.prisma.postsFluke.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return {
        response: false,
        message: 'Post não encontrado',
        data: [],
      };
    }
    const deletePost = await this.prisma.postsFluke.delete({ where: { id } });

    return {
      message: 'Post deletada com sucesso!',
      response: true,
      Post: [deletePost],
    };
  }
}
