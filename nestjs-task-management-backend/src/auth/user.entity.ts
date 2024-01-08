import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Task } from '../tasks/task.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  // 1st argument is what type tasks is. 2nd argument is how it relates to the task entity (aka table). eager true means whenever we access the user, we immediately get the tasks of that user. Only one side of the relationship can be eager.
  @OneToMany((type) => Task, (task) => task.user, { eager: true })
  tasks: Task[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt); // password is plaintext and comes from user that's trying to login
    return hash === this.password; // this.password is hashed form and comes from db 
  }
}
