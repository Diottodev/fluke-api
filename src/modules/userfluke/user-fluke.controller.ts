import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import UserFlukeDTO from 'src/dtos/user-fluke-dto';
import { UserFlukeService } from './user-fluke.service';

@Controller('user-fluke/vr1')
export class UserFlukeController {
  constructor(private readonly userFlukeService: UserFlukeService) {}

  @Post()
  async create(@Body() createUserFluke: UserFlukeDTO, @Res() res: Response) {
    const result = await this.userFlukeService.create(createUserFluke);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Get()
  findAll() {
    return this.userFlukeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.userFlukeService.findOne(id);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserFluke: UserFlukeDTO,
    @Res() res: Response,
  ) {
    const result = await this.userFlukeService.update(id, updateUserFluke);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.userFlukeService.remove(id);

    if (!result.response) {
      return res.status(HttpStatus.BAD_REQUEST).send(result);
    }
    return res.status(HttpStatus.CREATED).send(result);
  }
}
