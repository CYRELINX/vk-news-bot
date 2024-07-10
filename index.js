const fetchNews = require('./news-fetcher');
const postNews = require('./vk-poster');

// Функция для запуска таймера
function startPosting() {
  // Постим новости сразу при запуске
  postDailyNews();

  // Устанавливаем таймер для ежедневного постинга
  setInterval(() => {
    console.log('Выполняется ежедневное задание по постингу новостей.');
    postDailyNews();
  }, 3600000); // 3600000 миллисекунд = 1 часа
}

// Функция для получения и постинга новостей
async function postDailyNews() {
  const articles = await fetchNews();
  await postNews(articles);
}

// Запуск таймера
startPosting();
