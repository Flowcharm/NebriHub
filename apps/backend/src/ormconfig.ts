import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'diegxherrera',
  password: 'diegxherrera',
  database: 'nebricalendar',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
};
