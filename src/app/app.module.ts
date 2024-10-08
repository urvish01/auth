import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      envFilePath: process.env.NODE_ENV === 'production'? '.env' : '.env.dev',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
