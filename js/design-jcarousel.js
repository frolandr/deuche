/*=================== Настройка карусели для секции design ==================*/
$(function() {
    $('.design__jcarousel').jcarousel({                                        //настройки карусели
        center: true,                                                          //расположение по цетру: true - да, false - нет
        vertical: false,                                                       //вертикальная ориентация: true - да, false - нет
        wrap: 'circular'                                                       //возврат назад: null - перенос отключен, first - первый, last - последний, both - , circular - по кругу
    });

    $('.design__jcarousel').jcarouselAutoscroll({                              //автоматическая прокрутка
            interval: 3000,                                                    //интервал автопрокрутки в миллисекундах
            target: '+=1',                                                     //кол-во прокручиваемых объектов
            autostart: true                                                    //true - да, false - нет
    });

    $('.design__jcarousel-prev').jcarouselControl({target: '-=1'});            //прокрутка назад и кол-во прокручиваемых объектов
    $('.design__jcarousel-next').jcarouselControl({target: '+=1'});            //прокрутка вперед и кол-во прокручиваемых объектов
});
/*===========================================================================*/