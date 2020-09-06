import { Controller, Get, Injectable, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
@Controller('user')
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
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new Error("Olar");
    }
  }


}
