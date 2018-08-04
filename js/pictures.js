var lengthPictures = 25;
var comments = [
	'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var description = [
	'Тестим новую камеру!',
	'Затусили с друзьями на море',
	'Как же круто тут кормят',
	'Отдыхаем...',
	'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
	'Вот это тачка!'
];

var randomInteger = function (min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}
var generatePictures = function (picCol) {
	var pictures = [];
	var k;
	for (var i = 0; i<picCol; i++) {
		if(i==0) {
			k = picCol;
		}
		else {
			k = i;
		}
		pictures[i] = {
			url: 'photos/'+k+'.jpg',
			likes: randomInteger(15, 200),
			comments: [],
			description: description[randomInteger(0, description.length-1)]
		};

		var colComments = randomInteger(1,10);
		var commentaries = [];
		for (var j = 0; j < colComments; j++) {
			commentaries[j] = comments[randomInteger(0, comments.length-1)]+' '+comments[randomInteger(0, comments.length-1)];
		}
		pictures[i].comments = commentaries;
	}
	return pictures;
};
var pic = generatePictures(lengthPictures);
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');
var pictureBox = document.querySelector('.pictures');
for (var i = 0; i < pic.length; i++) {
	var pictureElement = pictureTemplate.cloneNode(true);
	pictureElement.querySelector('.picture__img').src = pic[i].url;
	pictureElement.querySelector('.picture__stat--likes').textContent = pic[i].likes;
	pictureElement.querySelector('.picture__stat--comments').textContent = pic[i].comments.length;

	pictureBox.appendChild(pictureElement);
}
var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
bigPicture.querySelector('.big-picture__img img').src = pic[0].url;
bigPicture.querySelector('.likes-count').textContent = pic[0].likes;
bigPicture.querySelector('.comments-count').textContent = pic[0].comments.length;
bigPicture.querySelector('.social__caption').textContent = pic[0].description;


var ul = bigPicture.querySelector('.social__comments');
for (var j = 0; j < pic[1].comments.length; j++) {
	var li = document.createElement('li');
	li.classList.add('social__comment');
	li.classList.add('social__comment--text');
	var img = document.createElement('img');
	img.classList.add('social__picture');
	img.src = 'img/avatar-'+randomInteger(1,6)+'.svg';
	img.alt = 'Аватар комментатора фотографии';
	img.width = 35;
	img.height = 35;
	var p = document.createElement('p');
	p.classList.add('social__text');
	p.textContent = pic[1].comments[j];
	li.appendChild(img);
	li.appendChild(p);
	ul.appendChild(li);
}

bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.social__loadmore').classList.add('hidden');