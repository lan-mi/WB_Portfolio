/* Fullsreen navigation */

function openNav() {
    document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
    document.getElementById('myNav').style.width = '0%';
}

/* Sandwich menu animate on page load */

$(document).ready(function () {
    $('#menu1').stop(true, true).delay(2500).animate({
        width: "50px"
    }, 1000).animate({
        width: "100px"
    }, 1000).animate({
        width: "40px"
    });
});

$(document).ready(function () {
    $('#menu2').stop(true, true).delay(2000).animate({
        width: "50px"
    }, 1000).animate({
        width: "100px"
    }, 1000).animate({
        width: "40px"
    });
});

$(document).ready(function () {
    $('#menu3').stop(true, true).delay(3000).animate({
        width: "50px"
    }, 1000).animate({
        width: "100px"
    }, 1000).animate({
        width: "40px"
    });
});

/* Adding active class to curent page link */

$(document).ready(function () {
    $('[href]').each(function () {
        if (this.href == window.location.href) {
            $(this).addClass('active-href');
        }
    });
});

/* Animate name div */

var someajaxtext = 'Milan Marijanovic';

$(document).ready(function () {

    var dv = $('#name');
    dv.text("");
    $({
        count: 0
    }).animate({
        count: someajaxtext.length
    }, {
        duration: 2500,
        step: function () {
            dv.text(someajaxtext.substring(0, Math.round(this.count)));
        }
    });

});

$(document).ready(function () {

    $('#name').delay(3000).animate({
        right: '4%'
    });

});

/* Main menu text animation */

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

/* Animate '.name-border' div */

$(document).ready(function () {
    setTimeout(function () {
        $('.top-border').animate({
            width: "80%"
        }, 500);
    }, 3500);
});

$(document).ready(function () {
    setTimeout(function () {
        $('.bottom-border').animate({
            width: "70%"
        }, 500);
    }, 3500);
});

/* Animating sandwich menu on hover */

$(document).ready(function () {
    $('#menu-toggle').hover(function () {
        $('.menu1').animate({
            width: "30px"
        }, 200);
        $('.menu2').animate({
            width: "25px"
        }, 200);
        $('.menu3').animate({
            width: "35px"
        }, 200);

    }, function () {
        $('.menu1').animate({
            width: "40px"
        }, 200);
        $('.menu2').animate({
            width: "40px"
        }, 200);
        $('.menu3').animate({
            width: "40px"
        }, 200);
    });
});

/*  ----------------- */





/* */







/*  ---------------   */
