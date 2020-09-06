import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import constants from '../constants';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    const user = new User();
    Object.keys(createUserDto).forEach(key => {
      user[key] = createUserDto[key];
    });
    return this.userRepository.save(user);
  }

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneOrFail(userId);
    Object.keys(updateUserDto).forEach(key => {
      user[key] = updateUserDto[key];
    });
    return this.userRepository.save(user);
  }

}
