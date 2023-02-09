import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import PostsFlukeDTO from 'src/dtos/user-fluke-dto';
import type { Response } from 'express';
import { PostsFlukeService } from './posts-fluke.service';
import { Prisma } from '@prisma/client';

@Controller('posts-fluke')
export class PostsFlukeController {
  constructor(private readonly postsFlukeService: PostsFlukeService) {}
  @Post()
  async create(
    @Body() createUserFluke: Prisma.PostsFlukeCreateInput,
    @Res() res: Response,
  ) {
    const result = await this.postsFlukeService.create(createUserFluke);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Get()
  findAll() {
    return this.postsFlukeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.postsFlukeService.findOne(id);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserFluke: PostsFlukeDTO,
    @Res() res: Response,
  ) {
    const result = await this.postsFlukeService.update(id, updateUserFluke);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.postsFlukeService.remove(id);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }
}
