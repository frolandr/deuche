/*============================ Модальное окно ===============================*/
const formModal = document.querySelector(".form-modal");                       //ссылка на модальное окно с формой

const btnProduceWhite = document.querySelectorAll('.button--produce-white');  //ссылки на все кнопки "Получить каталог" в секции PRODUCE
for (let i = 0; i < btnProduceWhite.length; i++) {                             //в цикле устанавливаем обработчик на нужные кнопки
    btnProduceWhite[i].addEventListener('click', formmodalOpen); 
}
const btnCatalog = document.querySelector(".button--catalog").addEventListener('click', formmodalOpen);
const btnWhyWhite = document.querySelector(".button--why--white").addEventListener('click', formmodalOpen);
const btnStepsWhite = document.querySelector(".button--steps--white").addEventListener('click', formmodalOpen);

const btnDesignRed = document.querySelector(".button--design--red").addEventListener('click', formmodalOpen);
const btnAdditional = document.querySelector(".button--additional").addEventListener('click', formmodalOpen);

const btnHeaderLink = document.querySelector(".header__link").addEventListener('click', formmodalOpen);

//// const btnBTN = document.querySelector(".button--callback");
//// btnBTN.addEventListener('click', formmodalOpen(4, 'Оставить заявку'));

const btnCallback = document.querySelector(".button--callback").addEventListener('click', formmodalOpen);

const btnFormModal = document.querySelector('.button--form-modal');            //сылка
btnFormModal.addEventListener('click', formmodalClose);                        //вешаем на нее обработчик

/* Клик на ESC (Закрытие модального окна) */
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !formModal.classList.contains('price-kitchen__modal-close')) {
        formmodalClose();                                                      //закрываем окно
    }
});

/* Клик ВНЕ окна (Закрытие модального окна) */
formModal.addEventListener('click', (e) => {
    if (e.target === formModal) {
        formmodalClose();                                                      //закрываем окно
    }
});

/* Показать модальное окно */
function formmodalOpen(e) {
    e.preventDefault();                                                        //отменяем переход по клику
    if (formModal.classList.contains('form-modal--close')) {                   //если установлен класс form-modal--close, то
        formModal.classList.remove('form-modal--close');                       //удаляем его
        
        const btnFrmModal = document.querySelector('.button--form-modal');     //меняем текст на кнопке
        btnFrmModal.innerHTML = e.target.innerText; 
        
        document.documentElement.style.overflow = 'hidden';                    //для overflow = 'hidden'
        document.body.scroll = 'no';                                           //скрываем полосы прокрутки
    }
}

/* Скрыть модальные окна */
function formmodalClose(e) {
    if (e !== undefined)                                                       //если клик по кнопке, то
        e.preventDefault();                                                    //отменяем переход по клику
    if (!formModal.classList.contains('form-modal--close')) {                  //если не установлен класс form-modal--close, то
        formModal.classList.add('form-modal--close');                          //устанавливаем его

        document.documentElement.style.overflow = 'scroll';                    //для overflow = 'scroll'
        document.body.scroll = "yes";                                          //показываем полосы прокрутки
    }
}
/*===========================================================================*/