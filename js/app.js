

const popupMenu = () => {
	const popup = document.querySelector('.popup');
	const burgerButton = document.querySelector('.burger');
	const closeButton = document.querySelector('.popup-button');
	const popupWrapper = document.querySelector('.popup-wrapper');


	burgerButton.addEventListener('click', () => {
		popup.classList.add('open-mask');
		popupWrapper.classList.add('open-popup');
	});


	closeButton.addEventListener('click', () => {
		popup.classList.remove('open-mask');
		popupWrapper.classList.remove('open-popup');
	});
};

const initSwiper = () => {
	const trendsSwiper = new Swiper('.trends-slider', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},

		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,

			}
		},

	});
	const blogSwiper = new Swiper('.blog-slider', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},

		spaceBetween: 20,
	});
	const gallerySwiper = new Swiper('.gallery-slider', {
		direction: 'horizontal',
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},

		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,

			}
		},
	});

};

const initTrendPopups = () => {
	const trendFirst = document.querySelector('.trend-link_1');
	const trendSecond = document.querySelector('.trend-link_2');
	const trendThird = document.querySelector('.trend-link_3');
	const trendTextFirst = document.querySelector('.trend-description__text_1');
	const trendTextSecond = document.querySelector('.trend-description__text_2');
	const trendTextThird = document.querySelector('.trend-description__text_3');

	trendFirst.addEventListener('mouseenter', () => {
		trendFirst.classList.add('trend-blur');
		trendTextFirst.classList.add('open-trend-description');
	})

	trendFirst.addEventListener('mouseleave', () => {
		trendFirst.classList.remove('trend-blur');
		trendTextFirst.classList.remove('open-trend-description');
	})


	trendSecond.addEventListener('mouseenter', () => {
		trendSecond.classList.add('trend-blur');
		trendTextSecond.classList.add('open-trend-description');
	})
	trendSecond.addEventListener('mouseleave', () => {
		trendSecond.classList.remove('trend-blur');
		trendTextSecond.classList.remove('open-trend-description');
	})


	trendThird.addEventListener('mouseenter', () => {
		trendThird.classList.add('trend-blur');
		trendTextThird.classList.add('open-trend-description');
	})

	trendThird.addEventListener('mouseleave', () => {
		trendThird.classList.remove('trend-blur');
		trendTextThird.classList.remove('open-trend-description');
	})
};

document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth
	if (width < 1024) {
		initSwiper();
		popupMenu();
	}
	if (width > 1024) {
		initTrendPopups();
	}
})









