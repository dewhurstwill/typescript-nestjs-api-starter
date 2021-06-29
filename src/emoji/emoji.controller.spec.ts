import { Test, TestingModule } from '@nestjs/testing';

import { EmojiController } from './emoji.controller';
import { EmojiService } from './emoji.service';

describe('EmojiController', () => {
  let emojiController: EmojiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmojiController],
      providers: [EmojiService],
    }).compile();

    emojiController = app.get<EmojiController>(EmojiController);
  });

  describe('root', () => {
    it('should return [\'😀\', \'😳\', \'🙄\']', () => {
      expect(emojiController.getEmoji()).toEqual(['😀', '😳', '🙄']);
    });
  });
});
