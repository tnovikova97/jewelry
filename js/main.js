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



// Модальное окно регистрации

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

// $('.message a').click(function () {
//     $('.user-form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });

// Реализация регистрации и авторизации в одном окне
$(function () {
    $('#reg-link').on('click', function (e) {
        $('.login-form').css('display', 'none');
        $('.register-form').css('display', 'inline');
        e.preventDefault()
    });
});

$(function () {
    $('#log-link').on('click', function (e) {
        $('.register-form').css('display', 'none');
        $('.login-form').css('display', 'inline');
        e.preventDefault()
    });
});

//Совет дня (Tip of the Day)

// Определяем массив
var tipOfTheDay = [ '',
    '<h1>Совет дня </h1> <br> Украшения - это то, что делает женщищу женщиной <br>(Коко Шанель)',
    '<h1>Совет дня </h1> <br> Ювелирные украшения - то дополнение, которое дает возможность почувствовать себя особенной <br>(Кэтрин Зета-Джонс)',
    '<h1>Совет дня </h1> <br> Бриллианты - всегда признак хорошего вкуса <br>(Вудди Аллен)',
    '<h1>Совет дня </h1> <br> Красота - как драгоценный камень: чем она проще, тем драгоценнее <br>(Фрэнсис Бэкон)',
];

function RandomTip() {
    var rnd = Math.floor((Math.random() * 4)) + 1
    document.getElementById('randomtip').innerHTML = tipOfTheDay[rnd];
}

// совет дня - открыть по кнопке
$('.js-btn-totd').click(function() {
    $('.js-overlay-totd').fadeIn();
});


// совет дня - закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-totd');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-totd').fadeOut();

    }
});


//Валидация формы регистрации

// getting all input text objects
var username = document.forms["reg-form"]["username"];
var surname = document.forms["reg-form"]["surname"];
var email = document.forms["reg-form"]["email"];
var login = document.forms["reg-form"]["login"];
var password = document.forms["reg-form"]["password"];
var password2 = document.forms["reg-form"]["password2"];

//getting all errors display objects
var username_error = document.getElementById("username_error");
var surname_error = document.getElementById("surname_error");
var email_error = document.getElementById("email_error");
var login_error = document.getElementById("login_error");
var password_error = document.getElementById("password_error");
var password2_error = document.getElementById("password2_error");

//setting all event listeners
username.addEventListener("blur", usernameVerify, true);
surname.addEventListener("blur", surnameVerify, true);
email.addEventListener("blur", emailVerify, true);
login.addEventListener("blur", loginVerify, true);
password.addEventListener("blur", passwordVerify, true);
password2.addEventListener("blur", password2Verify, true);

//validation function
function validate_reg() {
    //username validation
    if (username.value == "") {
        username.style.border = "3px solid #FF1F1F";
        username_error.textContent = "Требуется имя пользователя";
        username.focus();
        return false;
    }
    //surname validation
    if (surname.value == "") {
        surname.style.border = "3px solid #FF1F1F";
        surname_error.textContent = "Требуется фамилия пользователя";
        surname.focus();
        return false;
    }
    //email validation
    if (email.value == "") {
        email.style.border = "3px solid #FF1F1F";
        email_error.textContent = "Требуется адрес Email-почты";
        email.focus();
        return false;
    }
    //login validation
    if (login.value == "") {
        login.style.border = "3px solid #FF1F1F";
        login_error.textContent = "Требуется логин";
        login.focus();
        return false;
    }
    //password validation
    if (password.value == "") {
        password.style.border = "3px solid #FF1F1F";
        password_error.textContent = "Придумайте пароль";
        password.focus();
        return false;
    }

//    Проверка 2-х введеных паролей
    if (password.value != password2.value) {
        password.style.border = "3px solid #FF1F1F";
        password2.style.border = "3px solid #FF1F1F";
        password_error.textContent = "Пароли не совпадают";
        password.focus();
        return false;
    }
    return true;
}

//event handler function
function usernameVerify() {
    if (username.value !="") {
        username.style.border = "1px solid #5E6E66";
        username_error.innerHTML = "";
        return true;
    }
}

function surnameVerify() {
    if (surname.value !="") {
        surname.style.border = "1px solid #5E6E66";
        surname_error.innerHTML = "";
        return true;
    }
}

function emailVerify() {
    if (email.value !="") {
        email.style.border = "1px solid #5E6E66";
        email_error.innerHTML = "";
        return true;
    }
}

function loginVerify() {
    if (login.value !="") {
        login.style.border = "1px solid #5E6E66";
        login_error.innerHTML = "";
        return true;
    }
}

function passwordVerify() {
    if (password.value !="") {
        password.style.border = "1px solid #5E6E66";
        password_error.innerHTML = "";
        return true;
    }
}

function password2Verify() {
    if (password2.value !="") {
        password2.style.border = "1px solid #5E6E66";
        password2_error.innerHTML = "";
        return true;
    }
}

// Валидация формы авторизации
var login_auth = document.forms["auth-form"]["login_auth"];
var password_auth = document.forms["auth-form"]["password_auth"];

var login_auth_error = document.getElementById("login_auth_error");
var password_auth_error = document.getElementById("password_auth_error");

login_auth.addEventListener("blur", loginVerify, true);
password_auth.addEventListener("blur", passwordVerify, true);


function validate_auth() {
    //login validation
    if (login_auth.value == "") {
        login_auth.style.border = "3px solid #FF1F1F";
        login_auth_error.textContent = "Введите логин";
        login_auth.focus();
        return false;
    }
    //password validation
    if (password_auth.value == "") {
        password_auth.style.border = "3px solid #FF1F1F";
        password_auth_error.textContent = "Введите пароль";
        password_auth.focus();
        return false;
    }
    return true;
}

function loginVerify() {
    if (login_auth.value !="") {
        login_auth.style.border = "1px solid #5E6E66";
        login_auth_error.innerHTML = "";
        return true;
    }
}

function passwordVerify() {
    if (password_auth.value !="") {
        password_auth.style.border = "1px solid #5E6E66";
        password_auth_error.innerHTML = "";
        return true;
    }
}

