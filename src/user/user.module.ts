import { Module } from '@nestjs/common';
import { User } from './user';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [User, UserResolver, UserService]
})
export class UserModule {}
