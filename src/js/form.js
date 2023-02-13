import axios from 'axios';

const TOKEN = '6120086150:AAEsU4IK7fw786l6M1etnKu8wCt7FYVB_q8';
const CHAT_ID = '-1001374769076';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById('success');
const err = document.getElementById('err');

document.getElementById('tg').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Нова заявка з сайту!</b>\n`;
  message += `<b>Імʼя:</b> ${this.name.value}\n`;
  message += `<b>Телефон:</b> ${this.tel.value}\n`;
  message += `<b>Пошта:</b> ${this.email.value}\n`;
  message += `<b>Комментар:</b> ${this.comment.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.email.value = '';
      this.comment.value = '';
      success.innerHTML = 'Сообщение отправлено';
      success.style.display = 'block';
    })
    .catch(res => {
      err.innerHTML = 'Упс, виникла помилка...';
      err.style.display = 'block';
    })
    .finally(res => {
      //   console.log('End');
    });

  console.log(message);
});
