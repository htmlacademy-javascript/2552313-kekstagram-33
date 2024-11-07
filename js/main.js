const util = require('util');

//КОНСТАНТЫ
const MIN_COMMENT_AMOUNT = 0
const MAX_COMMENT_AMOUNT = 5
const MIN_AVATAR_VALUE = 1;
const MAX_AVATAR_VALUE = 6;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;
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
]
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]
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
]

//ПЕРЕМЕННЫЕ
let LastGeneratedID = 0;
let commentsId = [];

//ГЕНЕРАЦИЯ
//ID ПОСТА
function generatePostId() {
  return function () {
    LastGeneratedID += 1;
    return LastGeneratedID;
  }
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
  return 'photos/' + id + '.jpg';
}

//ЧИСЛА В ДИАПАЗОНЕ
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


//ГЕНЕРАЦИЯ МАССИВОВ ОБЪЕКТОВ


const getPost = (minLikes, maxLikes, minCommentAmount, maxCommentAmount, minAvatarValue, maxAvatarValue) => {
  return function () {
    let postId = generatePostId();
    let currentObject = postId();
    let commentsAmount = getRandomInteger(minCommentAmount, maxCommentAmount);
    let comments = Array.from({length: commentsAmount}, getComment(0, commentsAmount, minAvatarValue, maxAvatarValue));
    return {
      id: currentObject,
      url: generatePhotoUrl(currentObject),
      likes: getRandomInteger(minLikes, maxLikes),
      description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
      comments: comments
    }
  }
}

const getComment = (minCommentAmount, maxCommentAmount, minAvatarValue, maxAvatarValue) => {
  return function () {
    let commentId = generateCommentId(minCommentAmount, maxCommentAmount);
    return {
      id: commentId,
      avatar: `img/avatar${getRandomInteger(minAvatarValue, maxAvatarValue)}.svg`,
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: USERNAME[getRandomInteger(0, USERNAME.length - 1)]
    }
  }
}

//ВЫВОД
let posts = Array.from({length: 1}, getPost(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT, MIN_COMMENT_AMOUNT, MAX_COMMENT_AMOUNT, MIN_AVATAR_VALUE, MAX_AVATAR_VALUE));
console.log(util.inspect(posts, { showHidden: false, depth: null, colors: true }));