(function ($) {
    $(document).ready(function () {
        
        
        $.fn.lpMapInit = function () {

            var lpMapOptions = {
                center: [53.906324, 27.510367],
                zoom: 16,
                controls: ['fullscreenControl', 'zoomControl']
            }

            if (window.innerWidth < 768) {
                lpMapOptions.behaviors = ['multiTouch'];
            } else {
                lpMapOptions.behaviors = ['drag'];
            }

            var lpMap = new ymaps.Map('lp-map', lpMapOptions);

            var lpPlacemark = new ymaps.Placemark(lpMapOptions.center, {
                hintContent: 'ИТ Академия',
                balloonContentHeader: 'ИТ Академия',
                balloonContentBody: 'учебные курсы',
                balloonContentFooter: 'пер. 4-й загородный, 56А'
            });

            lpMap.geoObjects.add(lpPlacemark);
        }





    });
})(jQuery);
