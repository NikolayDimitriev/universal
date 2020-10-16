document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar'),
        main = document.querySelector('.main');
    
    header.addEventListener('click', function(e) {
      const target = e.target;
      
      if (target.closest('.menu-button')) {
        header.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible');
      }
    });

    main.addEventListener('click', function(e) {
        const target = e.target;
        if (target.closest('.main-block__note')) {
            const img = target.closest('.main-block__note');
            if (img.classList.contains('main-block__note--active')) {
              img.src = 'img/news/Bookmark.svg';
              img.classList.remove('main-block__note--active');
            } else {
              img.src = 'img/news/Bookmark-red.svg';
              img.classList.add('main-block__note--active');
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