import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiperPopup = new Swiper(".popup-swiper", {
	// Optional parameters
	direction: "horizontal",

	// loop: true,
	spaceBetween: 110,
	navigation: {
		nextEl: ".popup-swiper-button-next",
		prevEl: ".popup-swiper-button-prev",
	},

	pagination: {
		el: ".popup-swiper-pagination",
		clickable: true,
	},
});

const swiper = new Swiper(".products__swiper", {
	// Optional parameters
	direction: "horizontal",

	// slidesPerView: "auto",
	loop: true,
	// If we need pagination
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	slidesPerView: 1,
	spaceBetween: 20,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		476: {
			slidesPerView: 2,
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 3,
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 4,
			//   spaceBetween: 40,
		},
	},
});

const swiperLoys = new Swiper(".collection__swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	navigation: {
		nextEl: ".swiper-btn-next",
		prevEl: ".swiper-btn-prev",
	},

	centeredSlides: true,

	slidesPerView: 1,
	spaceBetween: 110,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		476: {
			slidesPerView: 3,
			spaceBetween: 70,
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 5,
			spaceBetween: 90,
		},

		1280: {
			slidesPerView: 5,
			spaceBetween: 90,
		},
	},
});

const arr = [
	{
		name: "Вкуся",
		description:
			"То самое чувство, когда кто-то пришел из любимого магазина! Так, посмотрим, и что у нас там?",
		id: 1,
	},

	{
		name: "Гудя",
		description:
			"Маленький дракоша с боооольшим сердцем. Любовь, поддержка, забота – он с радостью все отдаст без остатка!",
		id: 2,
	},

	{
		name: "Ко",
		description:
			"Иногда жизнь похожа на сложный, запутанный пазл… Но он знает точно – в итоге все сложится хорошо!",
		id: 3,
	},

	{
		name: "Тя",
		description:
			"Иногда жизнь похожа на сложный, запутанный пазл… Но он знает точно – в итоге все сложится хорошо!",
		id: 4,
	},

	{
		name: "Пеппер",
		description:
			"Точно знает, что все будет в огне! И говорит: если жизнь не сахар – попробуй добавить перца.",
		id: 5,
	},

	{
		name: "Флексон",
		description:
			"Танцуй так, говорит он, как будто на тебя никто не смотрит! Ну а если кто-то и смотрит, то пусть завииидует!",
		id: 6,
	},

	{
		name: "Няма",
		description:
			"Не пора ли нам перекусить – это вовсе не вопрос. Он-то точно знает, что пора! Присоединяйся!",
		id: 7,
	},

	{
		name: "Чудя",
		description:
			"Верит, что чудеса случаются. А если ждать приходится долго, всегда можно что-то учудить самостоятельно!",
		id: 8,
	},

	{
		name: "Холодок",
		description:
			"Не все Санты говорят «Хо-хо-хо!». Некоторые говорят «Ха-ха-ха!». Он уже надел шапочку и спешит ко всем, кто ждет чуда, веселья и подарков!",
		id: 9,
	},

	{
		name: "Джинджер",
		description:
			"Скучать и грустить? О нет, он из другого теста! Ведь там, где появится он, сразу запахнет весельем!",
		id: 10,
	},

	{
		name: "Капик",
		description:
			"Мастер почилить и растянуть удовольствие. Зачем куда-то спешить, если вокруг всегда море приятных развлечений?",
		id: 11,
	},

	{
		name: "Ося",
		description:
			"Отлично справляется сразу с кучей дел. Очень быстро листает ленты и набирает сообщения. Жаль, что не у всех есть сразу восемь рук...",
		id: 12,
	},

	{
		name: "Крисмик",
		description:
			"Если все говорят, что ты не подарок – они просто не умеют тебя распаковывать… А он знает точно, что внутри ты – просто чудо!",
		id: 13,
	},

	{
		name: "Космик",
		description:
			"А у тебя есть кто-то, глядя на кого хочется улететь в облака или даже космос? В крайнем случае, он поможет тебе достать с неба звезду.",
		id: 14,
	},

	{
		name: "Имбик",
		description:
			"Быть как все? Ну уж нет, спасибо… Ему так важно чем-то отличиться и не стесняться это показывать. Личность, что тут скажешь…",
		id: 15,
	},

	{
		name: "Лава",
		description:
			"Слышали выражение «светиться от любви»? Это именно он – уникальный персонаж, который светится в темноте! Краш!",
		id: 16,
	},

	{
		name: "Цапа-лапа",
		description:
			"Светится от радости даже в темноте! Ведь это так приятно – отцарапать для себя что-нибудь вкусненькое, полезненькое или интересненькое!",
		id: 17,
	},

	{
		name: "Морся",
		description:
			"Король спокойствия и гармонии, который блестяще справляется с любым стрессом (да-да, кстати, поэтому он и блестит!).",
		id: 18,
	},

	{
		name: "Поня",
		description:
			"Уверен, что друзей можно блестяще (поэтому он и блестит!) понять без слов. Зачем эти долгие разговоры, ведь у нас все и так – пон!",
		id: 19,
	},

	{
		name: "Пинки",
		description:
			"Эксперт романтических чатов, который с блеском (ага, он блестит!) подберет нужные слова, чтобы найти ключик к любому сердцу…",
		id: 20,
	},

	{
		name: "Стикки",
		description:
			"Если что-то не клеится, не унывай! Немного терпения, немного спокойствия… И вот уже снова все хо-ро-шо!",
		id: 21,
	},

	{
		name: "Калюка",
		description:
			"Побыть одному – просто блеск (поэтому герой блестит!). И если выдался такой денек, когда никого не хочется видеть, он честно предупреждает: сегодня меня лучше не трогать!",
		id: 22,
	},
	{
		name: "Снежок",
		description:
			"Это тот, кто знает все о зимних забавах и развлечениях! Знает, как поднять настроение, весело и активно провести время. Снежок не позволит грустить и подарит детям вкусное настроение!",
		id: 23,
	},

	{
		name: "Юмико",
		description:
			"Мама-панда, которая окружает своего малыша-непоседу нежностью и любовью. Забота о комфорте сынишки – она настоящий мастер в этом искусстве!",
		id: 24,
	},

	{
		name: "Муррр",
		description:
			"“Путь к сердцу лежит через желудок” – это про Муррра. От запаха любимого корма его мурррчание наполняется любовью и нежностью, а лапки так и тянутся кого-нибудь обнять. Просто замурррчательная жизнь!",
		id: 25,
	},
];

const bgName = document.getElementById("name");
const bgNumber = document.getElementById("number");
const bgDescription = document.getElementById("description");

swiperLoys.on("transitionEnd", function () {
	const activeSlide = document.querySelector(".swiper-slide-active");
	const activeSlideIndex =
		activeSlide.getAttribute("aria-label").split(" / ")[0] - 1;

	const nameSlide = arr[activeSlideIndex].name;
	const numberSlide = arr[activeSlideIndex].id;
	const descriptionSlide = arr[activeSlideIndex].description;

	bgName.setAttribute("data-name", nameSlide);
	bgNumber.setAttribute("data-number", numberSlide + "/" + arr.length);
	bgDescription.innerText = descriptionSlide;
});
