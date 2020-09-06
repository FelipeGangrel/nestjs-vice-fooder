import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import constants from '../constants';

dotenv.config();

export const databaseProviders = [
  {
    provide: constants.databaseConnection,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
      synchronize: true,
    }),
  }
];
