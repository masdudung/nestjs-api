import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from './mikro-orm.config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MikroOrmModule.forRoot(config), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
