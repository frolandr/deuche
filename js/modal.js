/*============================ Модальное окно ===============================*/
const priceBlock = document.querySelector(".price-kitchen");                   //ссылка на модальное окно

const btnHeader = document.querySelector('.button--price');                    //ссылка на кнопку "Рассчитать стоимость" в секции Header
btnHeader.addEventListener('click', modalOpen);                                   //вешаем на нее обработчик

const btnPrice = document.querySelectorAll('.button--produce-red');           //ссылки на все кнопки "Рассчитать стоимость" в секции PRODUCE
for (let i = 0; i < btnPrice.length; i++) {                                    //в цикле устанавливаем обработчик на нужные кнопки
    btnPrice[i].addEventListener('click', modalOpen); 
}

const btnWhy = document.querySelector('.button--why--red');                    //ссылка на кнопку "Рассчитать стоимость" в секции Why
btnWhy.addEventListener('click', modalOpen);                                   //вешаем на нее обработчик

const btnSteps = document.querySelector('.button--steps--red');                //ссылка на кнопку "Рассчитать стоимость" в секции Steps
btnSteps.addEventListener('click', modalOpen);                                 //вешаем на нее обработчик

const priceButton = document.querySelector('.button--price-kitchen');          //сылка в модальном окне на кнопку "Рассчитать стоимость"(закрывает окно)
priceButton.addEventListener('click', modalClose);                             //вешаем на нее обработчик

/* Клик на ESC (Закрытие модального окна) */
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !priceBlock.classList.contains('price-kitchen__modal-close')) {
        modalClose();                                                          //закрываем окно
    }
});

/* Клик ВНЕ окна (Закрытие модального окна) */
priceBlock.addEventListener('click', (e) => {
    if (e.target === priceBlock) {
        modalClose();                                                          //закрываем окно
    }
});

/* Показать модальное окно */
function modalOpen(e) {
    e.preventDefault();                                                        //отменяем переход по клику
    if (priceBlock.classList.contains('price-kitchen__modal-close')) {         //если установлен класс price-kitchen__modal-close, то
        priceBlock.classList.remove('price-kitchen__modal-close');             //удаляем его
        
        document.documentElement.style.overflow = 'hidden';                    //для overflow = 'hidden'
        document.body.scroll = 'no';                                           //скрываем полосы прокрутки
    }
}

/* Скрыть модальное окно */
function modalClose(e) {
    if (e !== undefined)                                                       //если клик по кнопке, то
        e.preventDefault();                                                    //отменяем переход по клику, если undefined, то клик не по кнопке

    if (!priceBlock.classList.contains('price-kitchen__modal-close')) {        //если не установлен класс price-kitchen__modal-close, то
        priceBlock.classList.add('price-kitchen__modal-close');                //устанавливаем его

        document.documentElement.style.overflow = 'scroll';                    //для overflow = 'scroll'
        document.body.scroll = "yes";                                          //показываем полосы прокрутки
    }
}
/*===========================================================================*/