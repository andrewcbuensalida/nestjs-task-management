import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig: any = config.get('db'); // db comes from top level config folder
// This is imported in app.module.ts
export const typeOrmConfig: TypeOrmModuleOptions = {
         // for mysql. need to grant priveleges in mysql workbench and needed to have the table already
         type: 'mysql',
         port: (process.env.RDS_PORT && parseInt(process.env.RDS_PORT)) || 3306,
         username: process.env.RDS_USERNAME || 'myNestUser',
         password: process.env.RDS_PASSWORD || 'myNestPassword',

         // for postgres. TODO doesn't work. just hangs
         // type: dbConfig.type,
         // port: process.env.RDS_PORT || dbConfig.port,
         // username: process.env.RDS_USERNAME || dbConfig.username,
         // password: process.env.RDS_PASSWORD || dbConfig.password,

         host: process.env.RDS_HOSTNAME || dbConfig.host,
         database: process.env.RDS_DB_NAME || dbConfig.database,
         entities: [__dirname + '/../**/*.entity.{js,ts}'],
         synchronize:
           process.env.TYPEORM_SYNC === 'true' || dbConfig.synchronize, // because synchronize is true, it automatically creates the tables/ TYPEORM_SYNC is a toggle so you you can set it to true for the first time in production so it creates the database for you.
       };

console.log(`Example typeOrmConfig: `, typeOrmConfig);
