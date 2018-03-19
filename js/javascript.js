function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(function () {
    $('#test').hover(function () {
            $('p').fadeOut('slow');
        },
        function () {
            $('p').fadeIn('slow');
        }
    );
});
