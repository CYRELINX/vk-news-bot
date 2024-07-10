const { VK } = require('vk-io');
const dotenv = require('dotenv');
dotenv.config();
// Инициализация VK API
const vk = new VK({
  token: process.env.VK_Token,
});

// Функция для постинга новостей
async function postNews(articles) {
  let message = '🎲 » Новости дня:\n\n';

  articles.forEach(article => {
    message += `
📰 » ${article.title}
🔗 » ${article.url}
Дата публикации: ${new Date(article.publishedAt).toLocaleString()}
\n-----------------------------------\n`;
  });

  try {
    await vk.api.wall.post({
      owner_id: -process.env.VK_Group_ID, // Замените на ID вашего сообщества
      message
    });
    console.log('Новости успешно опубликованы.');
  } catch (error) {
    console.error('Ошибка при публикации новостей:', error);
  }
}

module.exports = postNews;
