// Карусель продуктов
$(document).ready(function(){
    $("#carousel1").owlCarousel({
        items:1,
        loop: true
    });
});

// Карусель фотографий
$(document).ready(function(){
    $("#carousel2").owlCarousel({
        items:1,
        loop: true
        // ,
        // nav: true
        });
});

// Модальное окно

// открыть по кнопке

// обращаемся к классу элемента кнопки и в метод click помещаем событие
// элементу body задаем свойство css блюр в 5px - эффект матового стекла
// при открытие popup окна
// следующее событие - обращение к элементу overlay и применение метода fadeIn,
//который позволяет плавно показать окно

// $('.js-button-reg').click(function () {
//     $('main-content-wrapper').css('filter', 'blur(5px)');
//     $('js-overlay-reg').fadeIn();
// });
//
// // // Закрыть на крестик
// $('.js-close-reg').click(function () {
//     $('.js-overlay-reg').fadeOut();
//     $('main-content-wrapper').css('filter', 'none');
// });
