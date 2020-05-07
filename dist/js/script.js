$(function() {
	$('.fly-elements').addClass('fly-elements--active');

	$('html').on('click','.header__toggle, .menu__link', function() {
		if ($('.header__phone').css('margin-right') == '25px') {
			$('.header__menu').toggleClass('header__menu--active');
			$('.menu__list').toggleClass('header__menu--active');
			$('.body').toggleClass('body--scroll');
			$('.main').toggleClass('main--popup');
			$('.header__toggle').toggleClass('header__toggle--cross-icon');
			$('.footer').toggleClass('footer--deactive');
		}
	});

	if ($(window).width() < 639) {
		$('.footer__call-order').addClass('button--orange-style');
	}

  $('html').on('click','.button--call-order', function() {
      $('.contact-form').css('display','block');
      $('.contact-form__form').css('height','525px');
      $('.contact-form__headers--feedback').css('display','none');
      $('.contact-form__headers--call-order').css('display','block');
      $('.contact-form__labels--email').css('display','none');
  });
  $('html').on('click','.examples__link-project-order', function() {
      $('.contact-form').css('display','block');
      $('.contact-form__form').css('height','600px');
      $('.contact-form__headers--feedback').css('display','block');
      $('.contact-form__headers--call-order').css('display','none');
      $('.contact-form__labels--email').css('display','block');
  });
  $('html').on('click','.contact-form__button--cancel', function() {
      $('.contact-form').css('display','none');
  });
});

new Swiper('.examples__slides', {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1205: {
      slidesPerView: 3,
      spaceBetween: 27
    }
  },
  loop: true,
  wrapperClass: 'examples__my-work-list',
  slideClass: 'examples__my-work',
  pagination: {
    el: '.examples__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true
  },
  navigation: {
    nextEl: '.examples__arrow--right',
    prevEl: '.examples__arrow--left',
  },
  a11y: {
    prevSlideMessage: 'К предыдущему слайду',
    nextSlideMessage: 'К следующему слайду',
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});