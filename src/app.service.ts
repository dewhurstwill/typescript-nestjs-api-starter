import { Injectable } from '@nestjs/common';

import { Message } from './common/types';

@Injectable()
export class AppService {
  getRoot(): Message {
    return {
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    };
  }
}
