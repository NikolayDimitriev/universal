document.addEventListener('DOMContentLoaded', function() {
  var lifehackSlider = new Swiper('.lifehack-container', {
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  });
  
  const hero = document.querySelector('.hero'),
    heroTabs = hero.querySelectorAll('.hero-tabs__item'),
    heroSlids = hero.querySelectorAll('.hero-slider__item'),
    news = document.querySelector('.news');
  
  hero.addEventListener('click', function(e) {
    const target = e.target;
    let count = 0;
  
    // если кликнули по табу
    if (target.closest('.hero-tabs__item')) {
      //удаляю класс active у всех табов
      heroTabs.forEach(function(item) {
        item.classList.remove('hero-tabs__item--active')
      });
      //добавляю класс active тому, на кого кликнули
      target.closest('.hero-tabs__item').classList.add('hero-tabs__item--active');
      // узнаю индекс элемента на который кликнули
      heroTabs.forEach(function(item, index) {
        if (item.closest('.hero-tabs__item--active')) {
          count = index;
        }
      });
      // удаляю класс active у слайдера
      heroSlids.forEach(function(item) {
        item.classList.remove('hero-slider__item--active')
      });
      // делаю другой слайд активным
      heroSlids[count].classList.add('hero-slider__item--active');
    }
  });
  
  news.addEventListener('click', function(e) {
    const target = e.target;
  
    if (target.closest('.news-block__note')) {
      const img = target.closest('.news-block__note');
      if (img.classList.contains('news-block__note--active')) {
        img.src = 'img/news/Bookmark.svg';
        img.classList.remove('news-block__note--active');
      } else {
        img.src = 'img/news/Bookmark-red.svg';
        img.classList.add('news-block__note--active');
      }
    }
  });
  
  // валидация
  $('.form').each(function () {
      $(this).validate({
          errorClass: "invalid",
          messages: {
              email: {
                  required: "Нам нужен ваш адрес электронной почты",
                  email: "Необходимый формат: name@domain.com"
              },
              message: {
                  minlength: "Минимальное количество символов — 100"
              }
          }
      })
  });
});