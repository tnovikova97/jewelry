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
//     $('js-overlay-reg').fadeIn();
//     // $('body').css('filter', 'blur(5px)');
// });
//
// // Закрыть на крестик - work
// $('.js-close-reg').click(function () {
//     $('.js-overlay-reg').fadeOut();
//     $('body').css('filter', 'none');
// });



// Модальное окно

// открыть по кнопке
$('.js-button-reg').click(function() {
    $('.js-overlay-reg').fadeIn();
});

// закрыть на крестик
$('.js-close-reg').click(function() {
    $('.js-overlay-reg').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-reg');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-reg').fadeOut();

    }
});



