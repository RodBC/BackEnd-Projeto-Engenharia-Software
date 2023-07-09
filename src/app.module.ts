import { Module } from '@nestjs/common';
import { databaseProviders } from './app.providers';
import { UsersModule } from './users/users.module';

@Module({
    // imports:[UsersModule],
    providers:[...databaseProviders],
    exports:[...databaseProviders],
})
export class AppModule {}
