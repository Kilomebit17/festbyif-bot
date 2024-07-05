import "dotenv/config";
import { Telegraf, Markup } from "telegraf";
const token = process.env.TOKEN;
const bot = new Telegraf(token);
const appUrl = "https://festbyif.web.app";
bot.command("start", (ctx) => {
	ctx.reply(
		"Привіт! Раді вітати тебе в нашому додатку, тут ти можеш обрати зручну палатку в якій будеш проживати, переглянути учасників в палатці та змінити обрану палатку при необхідності. Нажимай Open App, або Let's get started для запуску додатку. Тут ти можеш відкривати його необхідну тобі к-сть раз =) Приємного відпочинку, та незабутніх вражень!",
		{
			reply_markup: {
				inline_keyboard: [
					[Markup.button.webApp("Open App", appUrl)],
				]
			}
		},
	);
});
bot.launch();
