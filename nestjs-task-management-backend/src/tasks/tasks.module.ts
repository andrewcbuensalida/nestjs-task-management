import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { AuthModule } from '../auth/auth.module';

// Module imports controllers, services, repositories
@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]), // TaskRepository has the queries to the db
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService], // TasksService calls the TaskRepository
})
export class TasksModule {}
