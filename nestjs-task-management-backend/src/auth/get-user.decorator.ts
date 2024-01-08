import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, req): User => { // data is whatever @GetUser decorator in tasks.controller.ts is called with
  //UseGuards AuthGuard, jwt.strategy or passport magically validates the user from the Bearer token and puts the user in req.user. Whatever is returned from validate in jwt.strategy.ts is injected in req
  return req.user;
});
