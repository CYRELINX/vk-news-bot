const axios = require('axios');
const dotenv = require('dotenv');
// URL для запроса
const url = 'https://newsapi.org/v2/top-headlines';
dotenv.config();
// Параметры запроса
const params = {
  country: 'ru',
  apiKey: process.env.NEWS_API_KEY
};

// Функция для выполнения запроса и возврата новостей
async function fetchNews() {
  try {
    const response = await axios.get(url, { params });
    return response.data.articles;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return [];
  }
}

module.exports = fetchNews;