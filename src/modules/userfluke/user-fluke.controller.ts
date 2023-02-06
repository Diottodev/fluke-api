import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import UserFlukeDTO from 'src/dtos/user-fluke-dto';
import { UserFlukeService } from './user-fluke.service';

@Controller('user-fluke/vr1')
export class UserFlukeController {
  constructor(private readonly userFlukeService: UserFlukeService) {}

  @Post()
  create(@Body() createUserFluke: UserFlukeDTO) {
    return this.userFlukeService.create(createUserFluke);
  }

  @Get()
  findAll() {
    return this.userFlukeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFlukeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserFluke: UserFlukeDTO) {
    return this.userFlukeService.update(id, updateUserFluke);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFlukeService.remove(id);
  }
}
