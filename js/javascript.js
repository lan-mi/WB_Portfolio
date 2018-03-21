function openNav() {
    document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}

/* Sandwich menu adding and removing class */

jQuery(document).ready(function ($) {
    $('#menu-toggle').hover(
        function () {
            $('.menu1').addClass('active1');
            $('.menu2').addClass('active2');
            $('.menu3').addClass('active3');
        },
        function () {
            $('.menu1').removeClass('active1');
            $('.menu2').removeClass('active2');
            $('.menu3').removeClass('active3');
        }
    )
});

$('#menu-toggle').mouseleave(function () {
    $('.active1').addClass('menu1');
    $('.active2').addClass('menu2');
    $('.active3').addClass('menu3');
});

/* Adding active class to curent page link */

$(document).ready(function () {
    $('[href]').each(function () {
        if (this.href == window.location.href) {
            $(this).addClass('active-href');
        }
    });
});

/* main menu text animation */

var textArray = ["learning!", "new technologies!", "web development!"];
var index = 0;
setInterval(function () {
    $("#main-animate").animate({
        opacity: 0
    }, function () {
        if (textArray.length > index) {
            $(this).text(textArray[index]).animate({
                opacity: 1
            })
            index++;
        } else
            index = 0;
    });
}, 3000);

/* footer reserved rights function - get year */

var a = new Date();
var b = document.getElementById("date").innerHTML = a.getFullYear();
