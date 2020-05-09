$(function() {
	$('.fly-elements').addClass('fly-elements--active');


  $('.contact-form__input--phone').mask('+7 (999) 999-99-99');


  $("form").submit(function(){
    var $form = $(this);
    $form.find('.error').removeClass('error');

    if ($form.find('input[name=name]').val() == '' |
    $form.find('input[name=name]').val() == 'Пожалуйста, введите имя') {
        $form.find('input[name=name]').addClass('error');
        $form.find('input[name=name]').val('Пожалуйста, введите имя');
        $('.contact-form__button--call:focus').css('box-shadow','0 0 5px 5px red');
        return false;
    }
    if ($form.find('input[name=phone]').val() == '' |
    $form.find('input[name=phone]').val() == 'Пожалуйста, введите телефон') {
        $form.find('input[name=phone]').addClass('error');
        $form.find('input[name=phone]').val('Пожалуйста, введите телефон');
        $('.contact-form__button--call:focus').css('box-shadow','0 0 5px 5px red');
        return false;
    }
    else {
      $('.contact-form__button--call:focus').css('box-shadow','0 0 5px 5px green');
    }

    $.post(
        $form.attr("action"),
        $form.serialize()
    );
    $('.contact-form').fadeOut();

    return false;
  });

  $('.contact-form__input--name').focus(function(){
    $(this).select();
  });

  $('html').on('click','.contact-form__button--cancel', function() {
      $('.contact-form').fadeOut();
  });
  $('html').keydown(function(e) {
    if (e.keyCode == 27) {
      e.stopPropagation();
      $('.contact-form').fadeOut();
    }
  });
  $('.contact-form').click(function(e) {
    if ($(e.target).closest('.contact-form__form').length == 0) {
      $(this).fadeOut();          
    }
  });


	$('html').on('click','.header__toggle, .menu__link--header', function() {
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