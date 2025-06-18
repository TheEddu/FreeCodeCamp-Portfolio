$(document).ready(function () {
    $(".ham-burger, .nav ul li a").click(function () {
        $(".nav").toggleClass("open");
        $(".ham-burger").toggleClass("active");
    });

    $(".nav ul li a, .go-down").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
            $(".nav ul li a").removeClass("active");
            $(this).addClass("active");
        }
    });
});

wow = new WOW({
    animateClass: 'animate__animated',
    offset: 0,
});
wow.init();