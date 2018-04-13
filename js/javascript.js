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
    $('#menu2').stop(true, true).delay(2000).animate({
        width: "50px"
    }, 1000).animate({
        width: "100px"
    }, 1000).animate({
        width: "40px"
    });
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
    $('#name').delay(3000).animate({
        right: '38px'
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

/* Animate portfolio page - images/links websites */

$(document).ready(function () {

    $('.container-image-a').animate({
        left: "0"
    }, 3000);
    $('.container-image-b').animate({
        left: "0"
    }, 2500);
    $('.container-image-c').animate({
        left: "0"
    }, 2000);
    $('.container-image-d').animate({
        left: "0"
    }, 1500);
    $('.container-image-e').animate({
        left: "0"
    }, 1000);

});

/* Animate About page - text-container */

$(document).ready(function () {
    $('.about-left').delay(800).animate({
        left: "0"
    }, 2000, "easeOutBack");
    $('.about-right').delay(800).animate({
        right: "0"
    }, 2000, "easeOutBack");
});

/* Name hover by letter */

$(document).ready(function () {

    $cont = $('.name h3');
    parts = $.map($cont.text().split(''), function (v) {
        return $('<span />', {
            text: v
        });
    });
    $cont.empty().append(parts);

});

/* Icons fadeIn nad fadeOut Landing page */

var longIntervalTime = 4000;

function cycle(id) {
    var nextId = (id == "icon-1") ? "icon-2" : "icon-1";
    $("#" + id)
        .fadeIn(400)
        .delay(longIntervalTime)
        .fadeOut(400, function () {
            cycle(nextId);
        });
}
cycle("icon-1", 0);

/* ---------------   */

var longTime = 5200;

function cycle1(id) {
    var nextId1 = (id == "icon-11") ? "icon-12" : "icon-11";
    $("#" + id)
        .fadeIn(400)
        .delay(longTime)
        .fadeOut(400, function () {
            cycle1(nextId1);
        });
}
cycle1("icon-11", 0);

/* -------------------   */

var longTime1 = 4700;

function cycle2(id) {
    var nextId2 = (id == "icon-21") ? "icon-22" : "icon-21";
    $("#" + id)
        .fadeIn(400)
        .delay(longTime1)
        .fadeOut(400, function () {
            cycle2(nextId2);
        });
}
cycle2("icon-21", 0);

/* ----------------- */

var longTime2 = 2000;

function cycle3(id) {
    var nextId2 = (id == "icon-31") ? "icon-32" : "icon-31";
    $("#" + id)
        .fadeIn(400)
        .delay(longTime2)
        .fadeOut(400, function () {
            cycle3(nextId2);
        });
}
cycle3("icon-31", 0);

/* ----------------- */

var longTime3 = 5500;

function cycle4(id) {
    var nextId3 = (id == "icon-41") ? "icon-42" : "icon-41";
    $("#" + id)
        .fadeIn(400)
        .delay(longTime3)
        .fadeOut(400, function () {
            cycle4(nextId3);
        });
}
cycle4("icon-41", 0);

/* ------------------- */

var longTime4 = 3500;

function cycle5(id) {
    var nextId4 = (id == "icon-51") ? "icon-52" : "icon-51";
    $("#" + id)
        .fadeIn(400)
        .delay(longTime4)
        .fadeOut(400, function () {
            cycle5(nextId4);
        });
}
cycle5("icon-51", 0);
