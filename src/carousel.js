(function () {

    $('#next').click(function () {
        if (!$('ul.carousel-nav> li:last-child').is(':visible')) {
            var lastVisibleLi = parseInt($('ul.carousel-nav>li').find(':visible').last().attr('id').match("[0-9]{2}")[0]);
            $('ul.carousel-nav li:eq(' + (lastVisibleLi - 5) + ')').removeClass('show').addClass('hide');
            $('ul.carousel-nav li:eq(' + lastVisibleLi + ')').removeClass('hide').addClass('show');
        }
    });

    $('#previous').click(function () {
        if (!$('ul.carousel-nav> li:first-child').is(':visible')) {
            var firstVisibleLi = parseInt($('ul.carousel-nav>li').find(':visible').first().attr('id').match("[0-9]{2}")[0]);
            $('ul.carousel-nav li:eq(' + (firstVisibleLi + 3) + ')').removeClass('show').addClass('hide');
            $('ul.carousel-nav li:eq(' + (firstVisibleLi - 2) + ')').removeClass('hide').addClass('show');
        }
    });

    $('ul.carousel-nav > li').click(function () {
        $("img#popUp").attr('src', $(this).find('img').attr('src').replace('thumb-', ''));
        $('#myModal').modal('show');
    });

})();
