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


// обращаемся к классу элемента кнопки и в метод click помещаем событие
// элементу body задаем свойство css блюр в 5px - эффект матового стекла
// при открытие popup окна
// следующее событие - обращение к элементу overlay и применение метода fadeIn,
//который позволяет плавно показать окно



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


//Tip of the Day
var today_obj=new Date();
// var today_date=today_obj.getDate();

// Определяем массив
var tipOfTheDay = [ '',
    '<h1>Совет дня </h1> <br> Украшения - это то, что делает женщищу женщиной <br>(Коко Шанель)',
    '<h1>Совет дня </h1> <br> Ювелирные украшения - то дополнение, которое дает возможность почувствовать себя особенной <br>(Кэтрин Зета-Джонс)',
    '<h1>Совет дня </h1> <br> Бриллианты - всегда признак хорошего вкуса <br>(Вудди Аллен)',
    '<h1>Совет дня </h1> <br> Красота - как драгоценный камень: чем она проще, тем драгоценнее <br>(Фрэнсис Бэкон)',
];

// window.onload = function() {
//     document.getElementById('TipOfTheDay').innerHTML = tipOfTheDay[today_date];
// }
function RandomTip() {
    var rnd = Math.floor((Math.random() * 4)) + 1
    document.getElementById('randomtip').innerHTML = tipOfTheDay[rnd];
}

// открыть по кнопке
$('.js-btn-totd').click(function() {
    $('.js-overlay-totd').fadeIn();
});


// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-totd');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-totd').fadeOut();

    }
});
