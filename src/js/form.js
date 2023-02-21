import axios from 'axios';

const TOKEN = '6120086150:AAEsU4IK7fw786l6M1etnKu8wCt7FYVB_q8';
const CHAT_ID = '-1001374769076';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById('success');
const error = document.getElementById('err');

const successAbout = document.getElementById('success-about');
const errorAbout = document.getElementById('err-about');

async function sendMessage(message) {
  try {
    await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });

    success.innerHTML = 'Повідомлення надіслано';
    success.style.display = 'block';

    successAbout.innerHTML = 'Повідомлення надіслано';
    successAbout.style.display = 'block';

    setTimeout(() => {
      success.style.display = 'none';
      successAbout.style.display = 'none';
    }, 5000);
  } catch (error) {
    console.error(error);
    showError();
  }
}

function validateForm(name, tel, email) {
  if (!name.value || !tel.value || !email.value) {
    showError('Заповніть, будь ласка, всі поля форми');
    return false;
  }

  return true;
}

function showError(errorMessage = 'Упс, виникла помилка...') {
  error.innerHTML = errorMessage;
  error.style.display = 'block';
}

function handleSubmit(e) {
  e.preventDefault();

  const { name, tel, email, comment } = e.target.elements;

  if (!validateForm(name, tel, email)) {
    return;
  }

  const message =
    `<b>Нова заявка з сайту!</b>\n` +
    `<b>Ім'я:</b> ${name.value}\n` +
    `<b>Телефон:</b> ${tel.value}\n` +
    `<b>Пошта:</b> ${email.value}\n` +
    `<b>Комментар:</b> ${comment.value}`;

  sendMessage(message);

  name.value = '';
  tel.value = '';
  email.value = '';
  comment.value = '';
}

document.getElementById('tg').addEventListener('submit', handleSubmit);
document.getElementById('tg-about').addEventListener('submit', handleSubmit);
