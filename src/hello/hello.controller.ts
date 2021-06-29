import { Controller, Get, Param } from '@nestjs/common';

import { HelloService } from './hello.service';
import { Message } from '../common/types';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @Get('')
  getHelloWorld(): Message {
    return this.helloService.getHelloWorld();
  }

  @Get(':name')
  getHelloName(
    @Param('name') name: string
  ): Message {
    return this.helloService.getHelloName(name);
  }
}
