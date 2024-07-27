import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './common/entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  async getUsers(): Promise<Users[]> {
    return this.appService.getUsers();
  }
  
  @Get("hello")
  getHello(): string {
    return this.appService.getHello();
  }
}
