/*============== По клику показывать следующие N элементов ==================*/
const NUMBER_BLOCKS_INITIALLY_DISPLAY = 3;                                     //количество блоков первоначально открытых для показа
const ITEMS_COUNT_PER_CLICK = 3;                                               //количество блоков для последующих показов
const produceShowButton = document.querySelector('.button--more');             //ссылка на кнопку "Показать еще"
const produceItems = document.querySelectorAll('.produce__item');              //ссылка на все блоки
// if (produceShowButton != null && produceItems != null) {
    produceShowButton.addEventListener('click', produceShowBlock);                 //вешаем на нее обработчик на клик

/*---------------------------------------------------------------------------*/


/*------------------ Подсчитываем общее количество блоков -------------------*/
let produceItemsCount = 0;
let produceI = 0;
for (produceI = 1; produceI < produceItems.length; produceI++) {
    if (produceItems[produceI].style.display != 'none') {
        produceItemsCount++;
    }
}
/*---------------------------------------------------------------------------*/


/*---------------------------------------------------------------------------*/
produceI = NUMBER_BLOCKS_INITIALLY_DISPLAY;                                    //количество первоначально открытых блоков
/*---------------------------------------------------------------------------*/


/* Открываем следующие блоки ------------------------------------------------*/
function produceShowBlock(event) {
    const produceBlockCount = produceI + ITEMS_COUNT_PER_CLICK;                //в счетчике начальнаый блок + количество которое нужно показать
    for (produceI; produceI < produceBlockCount; produceI++) {                 //перебираем
        produceItems[produceI].style.display = 'flex';                         //устанавливая блоку display = 'flex'

        if (produceI >= produceItemsCount) {                                   //если номер блока >= общему количеству блоков, то
            produceShowButton.removeEventListener('click', produceShowBlock);  //удаляем обработчик
            produceShowButton.style.display = 'none';                          //кнопке присваиваем display = 'none'
            return;                                                            //выходим
        }
    }
}

// }
/*===========================================================================*/