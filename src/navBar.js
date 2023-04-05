$(document).ready(function () {
    //$('header').hide();
    $('header').css('background', 'rgb(0,0,0,0)')
    //conditional
    $('header').hover(
        function () {
            $(this).css('opacity', '1')
        },
        function () {
            $(this).css('opacity', '0')
        }
    )

    $(window).scroll(function () {
        if ($(document).scrollTop() < 250) {
            $('header').css('background', 'rgb(0,0,0,0)')
            $('header').css('opacity', '0')
            $('header').hover(
                function () {
                    $(this).css('opacity', '1')
                },
                function () {
                    $(this).css('opacity', '0')
                }
            )
        } else {
            $('header').css('background', 'rgb(0,0,0,1)')
            $('header').css('opacity', '1')
            $('header').hover(function () {
                $(this).css('opacity', '1')
            })
        }
    })
})
