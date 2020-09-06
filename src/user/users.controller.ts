import { Controller, Get, Injectable, Post, Body, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) : Promise<User> {
    return this.usersService.update(userId, updateUserDto);
  }


}
