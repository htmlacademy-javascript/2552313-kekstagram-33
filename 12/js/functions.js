//ЗАДАНИЕ #1
const STRING_CHARSET = 'Любая строка';
const STRING_LENGTH = 1;
const CheckLength = (charset, length) => (charset.length <= length);

CheckLength (STRING_CHARSET, STRING_LENGTH);

//ЗАДАНИЕ #2
const PALINDROME_CHARSET = 'А Роза Упала На Лапу Азора';
const CheckPalindrome = (charset) => {
  let reverse = '';
  charset = charset.toLowerCase();
  charset = charset.replace(/ /g, '');
  for (let i = charset.length - 1; i >= 0; i--) {
    reverse += charset[i];
  }
  return charset === reverse;
};
CheckPalindrome (PALINDROME_CHARSET);

//МОДУЛЬ 5 - ЗАДАНИЕ 2

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/

const isOverTime = (startTime, endTime, meetingTime, meetingDuration) => {
  const startDay = parseInt(startTime.split(':')[0], 10) * 60 + parseInt(startTime.split(':')[1], 10);
  const endDay = parseInt(endTime.split(':')[0], 10) * 60 + parseInt(endTime.split(':')[1], 10);
  const meetingStart = parseInt(meetingTime.split(':')[0], 10) * 60 + parseInt(meetingTime.split(':')[1], 10);
  const meetingEnd = meetingStart + meetingDuration;
  return meetingStart >= startDay && meetingEnd <= endDay;
};

isOverTime('8:00', '17:30', '08:00', 571); //false
isOverTime('08:00', '17:30', '14:00', 90); // true
isOverTime('8:0', '10:0', '8:0', 120); // true
isOverTime('08:00', '14:30', '14:00', 90); // false
isOverTime('14:00', '17:30', '08:0', 90); // false
isOverTime('8:00', '17:30', '08:00', 900); // false

