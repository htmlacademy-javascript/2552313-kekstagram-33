//ЗАДАНИЕ #1
const STRING_CHARSET = 'Любая строка';
const STRING_LENGTH = 1;
const CheckLength = (charset, length) => {
  const result = charset.length <= length;
  return result;
};

CheckLength (STRING_CHARSET, STRING_LENGTH);



//ЗАДАНИЕ #2
let PALINDROME_CHARSET = 'А Роза Упала На Лапу Азора';
const CheckPalindrome = (charset) => {
  let reverse = '';
  charset = charset.toLowerCase();
  charset = charset.replace(/ /g, '');
  for (let i = charset.length - 1; i >= 0 ; i--) {
    reverse += charset[i];
  }
  const result = charset === reverse;
  return result;
};

CheckPalindrome (PALINDROME_CHARSET);


