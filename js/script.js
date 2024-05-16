$(function () {

    // スライダー設定
    $('.slider').slick({
        speed: 800,
        dots: true,
        arrows: false,
    });

    // スクロールボタン設定
    $(function() {
      let pagetop = $('.js-scroll-top');

      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });

      pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 100);
        return false;
      });
    });
})