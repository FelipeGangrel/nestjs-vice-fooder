import { Injectable, Inject } from '@nestjs/common';
import { Request } from 'express';
import { Repository } from 'typeorm';
import constants from '../constants';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject(constants.userRepository)
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = new User();
      user.email = createUserDto.email;
      return this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

}
