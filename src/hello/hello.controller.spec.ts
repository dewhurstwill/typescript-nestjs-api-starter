import { Test, TestingModule } from '@nestjs/testing';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

describe('HelloController', () => {
  let helloController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    helloController = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return { message: \'👋🌎🌍🌏\' }', () => {
      expect(helloController.getHelloWorld()).toEqual({
        message: '👋🌎🌍🌏'
      });
    });
  });

  describe('hello world', () => {
    it('should return { message: \'Hello 🌏\' }', () => {
      expect(helloController.getHelloName('world')).toEqual({
        message: 'Hello 🌏'
      });
      expect(helloController.getHelloName('World')).toEqual({
        message: 'Hello 🌏'
      });
      expect(helloController.getHelloName('WORLD')).toEqual({
        message: 'Hello 🌏'
      });
    });
  });

  describe('hello, { name }', () => {
    it('should return { message: \'Hello, Will\' }', () => {
      expect(helloController.getHelloName('Will')).toEqual({
        message: 'Hello, Will'
      });
      expect(helloController.getHelloName('Dave')).toEqual({
        message: 'Hello, Dave'
      });
      expect(helloController.getHelloName('Jeff')).toEqual({
        message: 'Hello, Jeff'
      });
    });
  });
});
