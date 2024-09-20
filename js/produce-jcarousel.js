/*================== Настройка карусели для секции produce ==================*/
$(function() {
    $('.produce__jcarousel').jcarousel({                                       //настройки карусели
        center: false,                                                         //расположение по цетру: true - да, false - нет
        vertical: false,                                                       //вертикальная ориентация: true - да, false - нет
        wrap: 'last'                                                           //возврат назад: null - перенос отключен, first - первый, last - последний, both - , circular - по кругу
    });

    $('.produce__jcarousel').jcarouselAutoscroll({                             //автоматическая прокрутка
        interval: 3000,                                                        //интервал автопрокрутки в миллисекундах
        target: '+=1',                                                         //кол-во прокручиваемых объектов
        autostart: true                                                        //true - да, false - нет
    });

    $('.produce__jcarousel-prev').jcarouselControl({target: '-=1'});           //прокрутка назад и кол-во прокручиваемых объектов
    $('.produce__jcarousel-next').jcarouselControl({target: '+=1'});           //прокрутка вперед и кол-во прокручиваемых объектов

    //Пагинация
    $('.produce__jcarousel-pagination')                                        //пагинация для класса produce__jcarousel-pagination
        .on('jcarouselpagination:active', 'a', function() {                    //
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {                  //
            $(this).removeClass('active');
        })
        .on('click', function(e) {                                             //
            e.preventDefault();
        })
        .jcarouselPagination({                                                 //
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });
});
/*===========================================================================*/