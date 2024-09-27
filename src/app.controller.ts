import { Controller, Get } from '@nestjs/common';
import { SkipAuth } from './common/decorator/skip-auth.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @SkipAuth()
  getHello(): string {
    return this.appService.getHello();
  }
}
