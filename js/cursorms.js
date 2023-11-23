// start function that fetch the text from data-cursor-text and put it in the hidden div above
$('[data-cursor-text]').on('mouseenter', function () {
    let dataCursorText = $(this).data('cursor-text');
    $('.custom-cursor').find('.cursor-text').text(dataCursorText);
    $('.custom-cursor').find('.duplicate').text(dataCursorText);
});

// end function that fetch the text from data-cursor-text and put it in the hidden div above

// this function add and removes the repective classes from css to propelry style and place the div
$('[data-cursor-text]').on('mouseenter', function () {
    let dataText = $(this).data('cursor-text');
    let dataBackgroundColor = $(this).data('background-color');
    $('.custom-cursor').addClass('cursor-hover');
    $('.custom-cursor').find('.cursor-text').text(dataText);
    $('.custom-cursor').find('.cursor-normal-before').css('background-color', dataBackgroundColor);
    $('.custom-cursor').find('.cursor-text').css("--cursor-speed", " " + dataText.length + "s");

});

$('[data-cursor-text]').on('mouseleave', function () {
    $('.custom-cursor').removeClass('cursor-hover');
});
$('main').on('mousemove', function () {
    if ($(".custom-cursor").hasClass('cursor-init')) {
    } else {
        $(".custom-cursor").addClass('cursor-init');
    }
});

$(document).mouseleave(function () {
    $(".custom-cursor").removeClass('cursor-init');
});
// end function add and removes the repective classes from css to propelry style and place the div

// this function is responsible to put everything in live action
// get the div and attach it to the mouse
// dont change anything unless you know what youare doing
// don't forget to add  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" this library in your html file to make everyting work
function initStickyCursorWithDelay() {

    // Sticky Cursor with delay
    // https://greensock.com/forums/topic/21161-animated-mouse-cursor/

    var posXBtn = 0
    var posYBtn = 0
    var posXImage = 0
    var posYImage = 0
    var mouseX = 0
    var mouseY = 0

    if (document.querySelector(".custom-cursor")) {
        gsap.to({}, 0.0083333333, {
            repeat: -1,
            onRepeat: function () {

                if (document.querySelector(".custom-cursor")) {
                    posXBtn += (mouseX - posXBtn) / 7;
                    posYBtn += (mouseY - posYBtn) / 7;
                    gsap.set($(".custom-cursor"), {
                        css: {
                            left: posXBtn,
                            top: posYBtn
                        }
                    });
                }
                if (document.querySelector(".mouse-pos-list-image")) {
                    posXImage += ((mouseX / 1) - posXImage) / 5;
                    posYImage += (mouseY - posYImage) / 5;
                    gsap.set($(".mouse-pos-list-image"), {
                        css: {
                            left: posXImage,
                            top: posYImage,
                        }
                    });
                    gsap.set($(".mouse-pos-list-rotate"), {
                        css: {
                            rotate: (mouseX - posXBtn) / 20
                        }
                    });
                }
            }
        });
    }

    $(window).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    // Mouse Init
    $('main').on('mousemove', function () {
        if ($(".custom-cursor").hasClass('cursor-init')) {
        } else {
            $(".custom-cursor").addClass('cursor-init');
        }
    });

    $(document).mouseleave(function () {
        $(".custom-cursor").removeClass('cursor-init');
    });

    // Normal Hover
    $('[data-cursor-text]').on('mouseenter', function () {
        let dataText = $(this).data('cursor-text');
        // let dataBackgroundColor = $(this).data('background-color');
        $('.custom-cursor').addClass('cursor-hover');
        $('.custom-cursor').find('.cursor-text').text(dataText);
        // $('.custom-cursor').find('.cursor-normal-before').css('background-color', dataBackgroundColor);
        $('.custom-cursor').find('.cursor-text').css("--cursor-speed", " " + dataText.length + "s");

    });
    $('[data-cursor-text]').on('mouseleave', function () {
        $('.custom-cursor').removeClass('cursor-hover');
    });

    // Link Hover
    $('a, .hover').on('mouseenter', function () {
        $('.custom-cursor').addClass('cursor-hover-link');
    });
}

// calling the function on page load
$(document).ready(function (e) {
    initStickyCursorWithDelay();
})