import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  // I guess because of the UseGuards AuthGuard, jwt.strategy or passport magically validates the user from the Bearer token and puts the user in req.user?
  return req.user;
});
