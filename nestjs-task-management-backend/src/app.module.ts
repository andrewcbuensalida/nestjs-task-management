import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), // typeOrmConfig has db credentials. forRoot is like register but forRoot, you are expecting to configure a dynamic module once and reuse that configuration in multiple places (though possibly unknowingly as it's abstracted away). This is why you have one GraphQLModule.forRoot(), one TypeOrmModule.forRoot(), etc. register, you are expecting to configure a dynamic module with a specific configuration for use only by the calling module. For example, with Nest's @nestjs/axios: HttpModule.register({ baseUrl: 'someUrl' }). If, in another module you use HttpModule.register({ baseUrl: 'somewhere else' }), it will have the different configuration. You can do this for as many modules as you want. forFeature, you are expecting to use the configuration of a dynamic module's forRoot but need to modify some configuration specific to the calling module's needs (i.e. which repository this module should have access to, or the context that a logger should use.)
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
