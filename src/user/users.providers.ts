import { Connection } from 'typeorm';
import constants from '../constants';
import { User } from './user.entity';

export const usersProviders = [
  {
    provide: constants.userRepository,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [constants.databaseConnection],
  },
];
