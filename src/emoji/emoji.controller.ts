import { Controller, Get } from '@nestjs/common';

import { EmojiService } from './emoji.service';

@Controller('emoji')
export class EmojiController {
  constructor(private readonly emojiService: EmojiService) {}

  @Get()
  getEmoji(): Array<String> {
    return this.emojiService.getEmoji();
  }
}
