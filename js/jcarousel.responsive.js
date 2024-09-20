(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();         //получаем ширину

                // if (width >= 600) {                     //если >= 600, то
                //     width = width / 3;                  //три элемента
                // } else if (width >= 350) {              //если >= 350, то
                //     width = width / 2;                  //три элемента
                // }
                // Math.ceil(width)
                // carousel.jcarousel('items').css('width',  Math.ceil(width) + 'px');
                //if (width < 768)
                carousel.jcarousel('items').css('width', 569 + 'px');//
            })
        //---------------------------------------------------------------------
            
        
        // Расположение по цетру ----------------------------------------------
        $('.jcarousel').jcarousel({
            center: true                         //true - да, false - нет
        });
        // Вертикальная ориентация --------------------------------------------
        $('.jcarousel').jcarousel({
            vertical: false                      //true - да, false - нет
        });
        //Автоматическая прокрутка --------------------------------------------
        $('.jcarousel').jcarouselAutoscroll({
                interval: 3000,                  //интервал автопрокрутки в миллисекундах
                target: '+=1',                   //кол-во прокручиваемых объектов
                autostart: false                  //true - да, false - нет
        });
        


        //Возврат назад к начальному/конечному элементу -----------------------
        $('.jcarousel').jcarousel({
            wrap: 'circular'                     //null - перенос отключен
                                                 //first - первый, last - последний, 
                                                 //both -        , circular - по кругу
        });
        //---------------------------------------------------------------------


        // Прокрутка назад ----------------------------------------------------
        $('.jcarousel-control-prev').jcarouselControl({
            target: '-=1'                    //кол-во прокручиваемых объектов
        });
        // Прокрутка вперед ---------------------------------------------------
        $('.jcarousel-control-next').jcarouselControl({
            target: '+=1'                    //кол-во прокручиваемых объектов
        });
        // Пагинация ----------------------------------------------------------
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
        //---------------------------------------------------------------------
    });
})(jQuery);
