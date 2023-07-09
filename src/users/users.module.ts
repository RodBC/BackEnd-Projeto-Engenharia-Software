import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.provider';
import { AppModule } from '../app.module';

@Module({
  imports: [AppModule],
  providers: [
    ...userProviders,
    UsersService,
  ],
  controllers: [UsersController], 
})
export class UsersModule {}
