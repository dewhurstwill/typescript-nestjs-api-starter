import { Injectable } from '@nestjs/common';

@Injectable()
export class EmojiService {
  private emojis: String[] = ['😀', '😳', '🙄'];

  getEmoji(): Array<String> {
    return [...this.emojis];
  }
}
