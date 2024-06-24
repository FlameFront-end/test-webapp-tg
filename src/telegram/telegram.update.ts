import { Update, Ctx, Start } from 'nestjs-telegraf';
import { Markup } from 'telegraf';

@Update()
export class TelegramUpdate {
  constructor() {}

  @Start()
  async start(@Ctx() ctx) {
    try {
      await ctx.reply(
          `Тестовый бот`,
          Markup.inlineKeyboard([
            [
              Markup.button.webApp(
                  'Го тестить',
                  `${process.env.FRONTEND_HOST}`,
              ),
            ],

          ])
      );
    } catch (error) {
      console.error('error', error);
      await ctx.reply('Произошла ошибка при обработке команды');
    }
  }
}
