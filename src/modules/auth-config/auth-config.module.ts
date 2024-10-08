import { Module } from '@nestjs/common';
import { AppController } from './controllers/auth-config.controller';
import { AppService } from './services/auth-config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AuthConfigModule {}
