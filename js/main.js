//const util = require('util');

//НАСТРОЙКИ
const MIN_COMMENT_AMOUNT_PER_POST = 0;
const MAX_COMMENT_AMOUNT_PER_POST = 30;
const COMMENTS_ID_SPACE = 1000;
const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 6;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
const POSTS_ARRAY_LENGTH = 25;
//МАССИВЫ ДАННЫХ
const DESCRIPTION = [
  'Фото дня.',
  'Как прекрасен этот мир.',
  'Сегодня отличный день.',
  'Мое настроение.',
  'Муд.',
  'Когда просто хорошо.',
  'Не судите - да не судимы будете',
  'Есть люди, которым нужно лишь пройти между мной и кем-то другим.',
  'Люблю путешествовать, путешествовать, любить, одним словом всё ...',
  'Чтобы было время - развивайся.',
  'Живу по правилам.',
  'Порой, это единственное, что объединяет людей',
  'Всегда буду идеалом.',
  'Девушки, не надо плакать. Зачем?',
  'Все уже в порядке.',
  'Вот этот мир, который ты рисуешь',
  'Только тебя одну я не люблю...',
  'В моей жизни было всякое',
  'Extymr cdtn, - f yt extymt nmvf',
  'Один раз отмерь, один раз отрежь',
  'Жи/Ши пиши с буквой и',
  'Не всякий тот, кто всякий, но всякий не тот.',
  'Сегодня у меня солар. Принимаю ваши деньги на карту 505 136 10.',
  'Берегите близких',
  'Пока мои враги спят - я качаюсь',
  'Неважно сколько раз ты упал, главное столько же встать'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const USERNAME = [
  'Boss1902',
  '_NaijelNagget_',
  'FaritkaProns1ck',
  '$Besenter$',
  'MonsterKill',
  'Faramires',
  'Deedog',
  'Grizzly',
  'JVCurly'
];
//ПЕРЕМЕННЫЕ
let LastGeneratedID = 0;
const commentsId = [];

//ГЕНЕРАЦИЯ
//ID ПОСТА
function generatePostId() {
  return function () {
    LastGeneratedID += 1;
    return LastGeneratedID;
  };
}
//ID КОММЕНТАРИЯ
function generateCommentId(min, max) {
  let currentValue = getRandomInteger(min, max);
  if (commentsId.length >= (max - min + 1)) {
    return null;
  }
  while (commentsId.includes(currentValue)) {
    currentValue = getRandomInteger(min, max);
  }
  commentsId.push(currentValue);
  return currentValue;
}
//ССЫЛКИ НА ФОТО
function generatePhotoUrl(id) {
  return `photos/${id}.jpg`;
}
//ЧИСЛА В ДИАПАЗОНЕ
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

//ГЕНЕРАЦИЯ МАССИВОВ ОБЪЕКТОВ
//КОММЕНТАРИИ
const getComment = (minAvatarValue, maxAvatarValue, commentId) => ({
      id: commentId,
      avatar: `img/avatar${getRandomInteger(minAvatarValue, maxAvatarValue)}.svg`,
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: USERNAME[getRandomInteger(0, USERNAME.length - 1)]})
//ПОСТЫ
const getPost = (minLikes, maxLikes, commentSpace, minCommentAmount, maxCommentAmount, minAvatarValue, maxAvatarValue) => {
  const getId = generatePostId();
  const postId = getId()// генерируем уникальный ID для поста
  return {
    id: postId, // используем полученный ID
    url: generatePhotoUrl(postId), // передаем тот же ID в generatePhotoUrl
    likes: getRandomInteger(minLikes, maxLikes),
    description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
    comments: Array.from({ length: getRandomInteger(minCommentAmount, maxCommentAmount) }, () =>
      getComment(minAvatarValue, maxAvatarValue, generateCommentId(0, commentSpace))
    ),
  };
};
//ВЫВОД
const posts = Array.from({length: POSTS_ARRAY_LENGTH}, () =>
  getPost(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT,COMMENTS_ID_SPACE, MIN_COMMENT_AMOUNT_PER_POST, MAX_COMMENT_AMOUNT_PER_POST, MIN_AVATAR_VALUE, MAX_AVATAR_VALUE));
//console.log(posts);
//Настройка node для вывода вложенного массива комментариев
//console.log(util.inspect(posts, {showHidden: false, depth: null, colors: true}));
