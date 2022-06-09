(function ($) {
    "use strict";
    $(window).on("load", function () {
      $.material.init();
      $(".search-icon").on("click", function () {
        $(".navbar-form").fadeIn(300);
        $(".navbar-form input").focus();
      });
      $(".navbar-form input").blur(function () {
        $(".navbar-form").fadeOut(300);
      });
      $(".carousel").carousel();
      $("#preloader").delay(500).fadeOut(1000);
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
          $(".navbar-area").removeClass("sticky");
        } else {
          $(".navbar-area").addClass("sticky");
        }
      });
      $(".navbar-nav .nav-item a").on("click", function () {
        $(this).siblings().toggleClass("show");
      });
      $(".navbar-nav .nav-item a span").on("click", function () {
        $(this).toggleClass("show");
      });
      $(".video-popup").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
      var wow = new WOW({ mobile: false });
      wow.init();
      var owl = $(".testimonials-carousel");
      owl.owlCarousel({
        dots: true,
        nav: false,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
      });
      var owl = $("#carousel-full");
      owl.owlCarousel({
        dots: true,
        nav: false,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
      });
      $("#client-logo").owlCarousel({
        dots: false,
        nav: false,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 4,
        responsive: {
          0: { items: 1 },
          575: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
        },
      });
      $("#flickr-carousel").owlCarousel({
        dots: false,
        nav: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        autoPlay: 3000,
        stopOnHover: true,
      });
      $("#Material-image-carousel").owlCarousel({
        dots: true,
        nav: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 4,
        autoPlay: 3000,
        stopOnHover: true,
        responsive: {
          0: { items: 1 },
          575: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
        },
      });
      $("#Material-image-carousel")
        .find(".owl-prev")
        .html('<i class="mdi mdi-arrow-left"></i>');
      $("#Material-image-carousel")
        .find(".owl-next")
        .html('<i class="mdi mdi-arrow-right"></i>');
      $("#team-carousel").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 4,
        autoPlay: 3000,
        margin: 15,
        dots: false,
        stopOnHover: true,
        responsive: {
          0: { items: 1 },
          575: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
        },
      });
      $(".work-counter-section").on(
        "inview",
        function (event, visible, visiblePartX, visiblePartY) {
          if (visible) {
            $(this)
              .find(".timer")
              .each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate(
                  { Counter: $this.text() },
                  {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                      $this.text(Math.ceil(this.Counter));
                    },
                  }
                );
              });
            $(this).off("inview");
          }
        }
      );
      $("#Material-portfolio").mixItUp();
      $("#myTab a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
      });
      var offset = 200;
      var duration = 500;
      $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
          $(".back-to-top").fadeIn(400);
        } else {
          $(".back-to-top").fadeOut(400);
        }
      });
      $(".back-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
    });
  })(jQuery);
  