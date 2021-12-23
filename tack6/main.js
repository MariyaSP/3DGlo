
const days = new Array("Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота", "Воскресенье");

const div = document.createElement('div');
const newYear = new Date('01 january 2022').getTime();
const now = new Date();

const hours = now.toLocaleString('ru', { hour: 'numeric' });
const minutes = now.toLocaleString('ru', { minute: 'numeric' });
const seconds = now.toLocaleString('ru', { second: 'numeric' });

const hi = document.createElement('p');
const weekDay = document.createElement('p');
const timeNow = document.createElement('p');
const remainDay = document.createElement('p');

let day = Math.floor(((newYear - now.getTime()) / 1000) / 60 / 60 / 24)

switch (true) {
    case (hours >= 5) && (hours < 11): hi.textContent = 'Доброе утро';
        break;
    case (hours >= 11) && (hours < 16): hi.textContent = 'Добрый день';
        break;
    case (hours >= 16) && (hours <= 23): hi.textContent = 'Добрый вечер';
        break;
    case (hours >= 0) && (hours < 5): hi.textContent = 'Доброй ночи';
        break;
}

weekDay.textContent = `Сегодня: ${days[now.getDay() - 1]}`;
timeNow.textContent = `Текущее время: ${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds< 10 ? '0' + seconds : seconds} ${hours < 12 ? 'AM' : 'PM'} `;
remainDay.textContent = `До Нового Года осталось ${day} дней`;

div.append(hi);
div.append(weekDay);
div.append(timeNow);
div.append(remainDay);

document.body.append(div);


