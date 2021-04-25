$(function() {

    /* slider */
    $('.slider').slick();

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    /*checkScroll(scrollOffset);*/
    
    $(window).on("scroll", function() { 

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll() {


        if(scrollOffset >= introH-100) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        var $this = $(this),
            blockId =  $this.data('scroll'),
            blockOffset = $(blockId).offset().top-100;
 
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Collapse */
    $("[data-collapse='loft']").on("click", function(event) {
        event.preventDefault();


        $("[id='loft']").toggleClass("active");
    });

    $("[data-collapse='modern']").on("click", function(event) {
        event.preventDefault();


        $("[id='modern']").toggleClass("active");
    });

    $("[data-collapse='hitech']").on("click", function(event) {
        event.preventDefault();


        $("[id='hitech']").toggleClass("active");
    });

    $("[data-collapse='minimalism']").on("click", function(event) {
        event.preventDefault();


        $("[id='minimalism']").toggleClass("active");
    });

    $("[data-collapse='burger']").on("click", function(event) {
        event.preventDefault();


        $("[id='burger']").toggleClass("active");
        $("[id='header']").toggleClass("burger");
    });

    $("[data-collapse='burger__btn']").on("click", function(event) {
        event.preventDefault();


        $("[id='burger']").toggleClass("active");
        $("[id='header']").toggleClass("burger");
    });
    
});