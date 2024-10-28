//ЗАДАНИЕ #1
const STRING_CHARSET = 'Любая строка';
const STRING_LENGTH = 10;
const CheckLength = (charset, length) => {
  let result;
  result = charset.length <= length;
  return result;
};

const FirstTask = CheckLength (STRING_CHARSET, STRING_LENGTH);
console.log(FirstTask);


//ЗАДАНИЕ #2
const PALINDROME_CHARSET = 'А Роза Упала На Лапу Азора';
const CheckPalindrome = (charset) => {
  let result;
  let reverse = '';
  charset = charset.toLowerCase();
  charset = charset.replace(/ /g, '');
  for (let i = charset.length; i > 0 ; i--) {
    reverse += charset[charset.length - i];
  }
  result = charset === reverse;
  return result;
};

const SecondTask = CheckPalindrome (PALINDROME_CHARSET);
console.log(SecondTask);

