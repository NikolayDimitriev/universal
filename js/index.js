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
  heroSlids = hero.querySelectorAll('.hero-slider__item');

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