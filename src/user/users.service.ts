import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import constants from '../constants';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import EntityNotfoundException from 'src/exceptions/entity-not-found.exception';

@Injectable()
export class UsersService {

  constructor(
    @Inject(constants.userRepository)
    private userRepository: Repository<User>,
  ) { }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new EntityNotfoundException("Não foi possível encontrar o usuário");
    }
    return user;
  }

  findAll(): Promise<User[]> {
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
