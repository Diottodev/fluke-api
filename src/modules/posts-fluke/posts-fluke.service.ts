import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreatePostsFlukeInput } from './dto/create-Posts-fluke.input';
import { UpdatePostsFlukeInput } from './dto/update-Posts-fluke.input';

@Injectable()
export class PostsFlukeService {
  constructor(private prisma: PrismaService) {}

  async create(createPostsFlukeInput: CreatePostsFlukeInput) {
    const post = await this.prisma.postsFluke.create({
      data: {
        title: createPostsFlukeInput.title,
        content: createPostsFlukeInput.content,
        author: {
          connect: { id: createPostsFlukeInput.authorId },
        },
      },
    });

    return post;
  }

  async getAuthor(email: string) {
    const author = await this.prisma.userFluke.findUnique({
      where: { email },
    });
    console.log(author, 2);

    return author;
  }

  async findAll() {
    const posts = await this.prisma.postsFluke.findMany();
    console.log(posts, 2);
    return posts;
  }

  async findOneById(id: string) {
    const user = await this.prisma.postsFluke.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async update(id: string, updatePostsFlukeInput: UpdatePostsFlukeInput) {
    const updatePost = this.prisma.postsFluke.update({
      where: {
        id,
      },
      data: {
        id: updatePostsFlukeInput.id,
        updatedAt: updatePostsFlukeInput.updatedAt,
        content: updatePostsFlukeInput.content,
        title: updatePostsFlukeInput.title,
      },
    });
    return updatePost;
  }

  async remove(id: string) {
    const deletePost = await this.prisma.postsFluke.delete({ where: { id } });

    return deletePost;
  }
}
