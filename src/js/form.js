import axios from 'axios';

const TOKEN = '6120086150:AAEsU4IK7fw786l6M1etnKu8wCt7FYVB_q8';
const CHAT_ID = '-1001374769076';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById('success');
const error = document.getElementById('err');

document.getElementById('tg').addEventListener('submit', function (e) {
  e.preventDefault();

  const { name, tel, email, comment } = e.target.elements;

  if (!name.value || !tel.value || !email.value) {
    error.innerHTML = 'Заповніть, будь ласка, всі поля форми';
    error.style.display = 'block';
    return;
  }

  const message =
    `<b>Нова заявка з сайту!</b>\n` +
    `<b>Ім'я:</b> ${name.value}\n` +
    `<b>Телефон:</b> ${tel.value}\n` +
    `<b>Пошта:</b> ${email.value}\n` +
    `<b>Комментар:</b> ${comment.value}`;

  try {
    const response = axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });

    name.value = '';
    tel.value = '';
    email.value = '';
    comment.value = '';
    success.innerHTML = 'Повідомлення надіслано';
    success.style.display = 'block';
  } catch (error) {
    console.error(error);
    error.innerHTML = 'Упс, виникла помилка...';
    error.style.display = 'block';
  }
});
