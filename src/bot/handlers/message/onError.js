import { bot } from "../../bot.js";

function onError(msg) {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Botda kutilmagan xatolik...`);
}

export default onError;
