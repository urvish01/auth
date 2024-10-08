import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/auth-config.service';

@Controller("auth-config")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}