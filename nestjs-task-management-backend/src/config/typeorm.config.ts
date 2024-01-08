import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig: any = config.get('db'); // db comes from top level config folder
// This is imported in app.module.ts
export const typeOrmConfig: TypeOrmModuleOptions = {
  // for mysql. need to grant priveleges in mysql workbench and needed to have the table already
  type: 'mysql',
  port: 3306,
  username: 'myNestUser',
  password: 'myNestPassword',

  // for postgres. TODO doesn't work. just hangs
  // type: dbConfig.type,
  // port: process.env.RDS_PORT || dbConfig.port,
  // username: process.env.RDS_USERNAME || dbConfig.username,
  // password: process.env.RDS_PASSWORD || dbConfig.password,

  host: process.env.RDS_HOSTNAME || dbConfig.host,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: ['**/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize, // because synchronize is true, it automatically creates the tables
};

console.log(`Example typeOrmConfig: `, typeOrmConfig);
