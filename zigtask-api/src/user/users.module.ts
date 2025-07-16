import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.svc';
import { Module } from '@nestjs/common';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
