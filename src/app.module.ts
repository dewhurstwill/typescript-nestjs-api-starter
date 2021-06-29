import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HelmetMiddleware } from '@nest-middlewares/helmet';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmojiModule } from './emoji/emoji.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    HelloModule,
    EmojiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
    .apply(HelmetMiddleware).forRoutes('');
  };
};
