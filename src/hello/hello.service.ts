import { Injectable } from '@nestjs/common';

import { Message } from '../common/types';

@Injectable()
export class HelloService {
  getHelloWorld(): Message {
    return {
      message: '👋🌎🌍🌏'
    };
  }

  getHelloName(name: string): Message {
    let message = 'Hello, ' + name;
    
    if (name.toLowerCase() === 'world') {
      message = 'Hello 🌏';
    }

    return {
      message,
    }
  }
}
