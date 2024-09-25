import { Controller, Request, Get } from '@nestjs/common';
import { Users } from './users.interface';
import { SkipAuth } from 'src/common/decorator/skip-auth.decorator';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @Get('profile')
  getProfile(@Request() req): Users {
    return req.user;
  }

  @Get('lala')
  getLala(@Request() req): Users {
    return req.user;
  }

  @Get('iseng')
  @SkipAuth()
  getIseng() {
    return [];
  }
}
