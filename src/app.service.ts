import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './common/entity/user.entity';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>    
  ) {
    console.log('AppService constructor');
  }

  async createUser(name: string, email: string): Promise<Users> {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async getUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  getHello(): string {
    this.logger.log('Hello this sample log by log method');
    this.logger.debug('Hello this sample log by debug method');
    return 'Hello World!';
  }
}
