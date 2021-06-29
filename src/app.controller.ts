import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Message } from './common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): Message {
    return this.appService.getRoot();
  }
}
