jQuery(document).ready(function ($) {
    // document start


    // Navbar
    $("<span class='clickD'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
    $('.navbar-nav li .clickD').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        }
        else {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
    });

    $(window).on('resize', function () {
        if ($(this).width() < 1025) {
            $('html').click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $(document).click(function () {
                $('.navbar-nav li .clickD').removeClass('toggled');
                $('.toggled').removeClass('toggled');
                $('.sub-menu').removeClass('show');
            });
            $('.navbar-nav').click(function (e) {
                e.stopPropagation();
            });
        }
    });
    // Navbar end



    /* ===== For menu animation === */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html').toggleClass("open-nav");
    });

    // Navbar end




    // to make sticky nav bar
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".main-head").addClass("fixed");
            $('body').css("padding-top", $(".main-head").outerHeight());
        }
        else {
            $(".main-head").removeClass("fixed");
            $('body').css("padding-top", 0);
        }
    })














    var $slide = $('.strategies_slider');
    var $nav = $('.strategies_button').find('li');
    var enableNav = true;
    var speed = 1000;

    $slide.on('init reInit', function (event, slick) {
        if (!slick.$dots) return;
        $("#slide_paging").html('<b class="page">' + (slick.currentSlide + 1) + '</b> / ' + (slick.$dots[0].children.length));
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (enableNav) {
            $nav.removeClass("on");
            $nav.eq(nextSlide).addClass("on");
            navStatus();
        }

        if (!slick.$dots) return;
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#slide_paging").find(".page").text(i);
    });

    function navStatus() {
        enableNav = false;
        setTimeout(function () {
            enableNav = true;
        }, speed);
    }

    $nav.on("click", function () {
        if (enableNav) {
            var slideNo = $(this).index();
            $slide.slick('slickGoTo', slideNo);
            $nav.removeClass("on");
            $(this).addClass("on")
            $("#slide_paging").find(".page").text(slideNo + 1);
            navStatus();
        }
    });

    $slide.slick({
        arrows: false,
        //   prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
        //   nextArrow: '<button class="slide-arrow next-arrow">></button>',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        //     slidesToScroll: 1,
        //   autoplay:false,
        //   fade:true,
        //   speed:speed,
        //   autoplay:true,
        //   autoplaySpeed:3000,
        draggable: true
    });








    // document end

})


////////// counter js 

const counterUp = window.counterUp.default
const callback = entries => {
    entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 3000,
                delay: 16,
            })
            el.classList.add('is-visible')
        }
    })
}

const IO = new IntersectionObserver(callback, { threshold: 1 })

const allel = document.querySelectorAll('.marks')
allel.forEach(function (el) {
    IO.observe(el);
})


// aos js

AOS.init({
    duration: 1200,
    once: true,
});